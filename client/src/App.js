import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import Home from "./components/Home";
import Password from "./accountBox/Password";
import Dashboard from "./components/dashboard"; // Import Dashboard component

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/signin" element={<AccountBox />} />
          <Route path="/" element={<AccountBox />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset-password" element={<Password />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
          {/* Remove the Service Provider route since it's now rendered within Dashboard */}
          {/* Add other routes as needed */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
