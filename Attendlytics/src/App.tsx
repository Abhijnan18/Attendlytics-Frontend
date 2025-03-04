// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/HomePage"; // Landing page content
import LoginPage from "./pages/LoginPage"; // Login page for different roles
import SemesterAnalyticsPage from "./pages/SemesterAnalyticsPage";
import ClassAnalyticsPage from "./pages/ClassAnalyticsPage";
import SubjectAnalyticsPage from "./pages/SubjectAnalyticsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapping all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login/:role" element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path=":year/semester" element={<SemesterAnalyticsPage />} />
          <Route path=":year/class" element={<ClassAnalyticsPage />} />
          <Route path=":year/subject" element={<SubjectAnalyticsPage />} />
          {/* Optional: default to SemesterAnalyticsPage if no parameters are provided */}
          <Route index element={<SemesterAnalyticsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
