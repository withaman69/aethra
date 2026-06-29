import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Resume from "../pages/Resume/Resume";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Certifications from "../pages/Certifications/Certifications";
import Goals from "../pages/Goals/Goals";
import AIMentor from "../pages/AIMentor/AIMentor";
import Interview from "../pages/Interview/Interview";
import Roadmaps from "../pages/Roadmaps/Roadmaps";
import SkillGap from "../pages/SkillGap/SkillGap";
import Reports from "../pages/Reports/Reports";
import ResumeScore from "../pages/ResumeScore/ResumeScore";
import AdvancedResumeScore from "../pages/AdvancedResumeScore/AdvancedResumeScore";
import CareerReadiness from "../pages/CareerReadiness/CareerReadiness";
import JobReadinessReport from "../pages/JobReadinessReport/JobReadinessReport";
import InterviewHistory from "../pages/InterviewHistory/InterviewHistory";
import Home from "../pages/Home/Home";
import ATSAnalyzer from "../pages/reports/ATSAnalyzer";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <Resume />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skill-gap/:roadmapId" element={<SkillGap />} />
        <Route path="/career-readiness" element={<CareerReadiness />} />
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>
        <Route
  path="/ats-analyzer"
  element={<ATSAnalyzer />}
/>
        <Route
          path="/interview-history"
          element={
            <ProtectedRoute>
              <InterviewHistory />
            </ProtectedRoute>
          }
        />
        <Route path="/job-readiness-report" element={<JobReadinessReport />} />
        <Route
          path="/advanced-resume-score"
          element={<AdvancedResumeScore />}
        />
        <Route path="/resume-score" element={<ResumeScore />} />
        <Route
          path="/interview"
          element={
            <ProtectedRoute>
              <Interview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmaps"
          element={
            <ProtectedRoute>
              <Roadmaps />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentor"
          element={
            <ProtectedRoute>
              <AIMentor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
