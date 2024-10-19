import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

const Password = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!validatePassword(newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Assuming there's an API endpoint for resetting the password
        await axios.post("http://localhost:5000/reset-password", {
          newPassword,
        });

        alert("Password reset successful! Please login with your new password.");
        navigate("/signin");
      } catch (error) {
        console.error("Password reset error:", error);
        setErrors({ form: "Password reset failed. Please try again later." });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSigninClick = () => {
    navigate("/signin");
  };

  return (
    <BoxContainer>
      <h2>Password Reset</h2>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {errors.newPassword && <ErrorMessage>{errors.newPassword}</ErrorMessage>}
        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Loading..." : "Reset Password"}
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={handleSigninClick}>
        <BoldLink>Password reset? Signin</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export default Password;
