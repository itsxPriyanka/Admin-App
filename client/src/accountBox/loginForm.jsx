// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   MutedLink,
//   SubmitButton,
//   ErrorMessage,
// } from "./common";
// import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";

// export function LoginForm(props) {
//   const { switchToSignup } = useContext(AccountContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setErrors({});
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const newErrors = {};

//     if (!validateEmail(email)) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!validatePassword(password)) {
//       newErrors.password =
//         "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       try {
//         // Send login request to backend
//         const response = await axios.post("http://localhost:5000/login", {
//           email,
//           password,
//         });

//         // Assuming response contains JWT token
//         const { token } = response.data;

//         // Store token securely (in localStorage for example)
//         localStorage.setItem("token", token);

//         // Navigate to home page or another authenticated route
//         navigate("/home");
//       } catch (error) {
//         console.error("Login error:", error);
//         // Handle specific login errors if needed
//         setErrors({ form: "Login failed. Please check your credentials and try again." });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <BoxContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
//         {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
//         <Marginer direction="vertical" margin={10} />
//         <SubmitButton type="submit" disabled={loading}>
//           {loading ? "Loading..." : "Signin"}
//         </SubmitButton>
//       </FormContainer>
//       <Marginer direction="vertical" margin="1em" />
//       <MutedLink href="#">
//         Don't have an account?{" "}
//         <BoldLink href="#" onClick={switchToSignup}>
//           Signup
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }

















import React, { useState, useContext, useEffect } from "react";
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
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/home");
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ form: "Login failed. Please check your credentials and try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePasswordResetClick = () => {
    navigate("/reset-password");
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
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
        {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Loading..." : "Signin"}
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={handlePasswordResetClick}>
       Forgot Password?  <BoldLink> Reset </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" /> {/* Adding space here */}
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
