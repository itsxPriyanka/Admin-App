import React, { useState, useContext, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  ErrorMessage,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrors({});
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!validateUsername(fullName)) {
      newErrors.fullName = "Invalid full name";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Send signup request to backend
        const response = await axios.post("http://localhost:5000/signup", {
          fullName,
          email,
          password,
        });

        // Assuming response contains JWT token
        const { token } = response.data;

        // Store token securely (in localStorage for example)
        localStorage.setItem("token", token);

        // Alert or navigate to indicate successful signup
        alert("Signup successful! Please login to use the app.");

        // Navigate to login page or another route
        navigate("/signin");
      } catch (error) {
        console.error("Signup error:", error);
        // Handle specific signup errors if needed
        setErrors({ form: "Signup failed. Please try again later." });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSigninClick = () => {
    switchToSignin();
    navigate("/signin");
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Loading..." : "Signup"}
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={handleSigninClick}>
        Already have an account?{" "}
        <BoldLink href="#">
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
