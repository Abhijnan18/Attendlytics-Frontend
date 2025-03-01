// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DashboardPage from "./layout/Dashboard";
import HomePage from "./pages/HomePage"; // Create this file to house your home/landing page content
import LoginPage from "./pages/LoginPage"; // Login page for different roles

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapping all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login/:role" element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}>

        </Route>
      </Routes>

    </Router>
  );
};

export default App;
