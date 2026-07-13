import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import AethraLoader from "../components/loading/AethraLoader";

const Dashboard = lazy(() =>
  import("../pages/Dashboard/Dashboard")
);

const Profile = lazy(() =>
  import("../pages/Profile/Profile")
);

const Resume = lazy(() =>
  import("../pages/Resume/Resume")
);

const Education = lazy(() =>
  import("../pages/Education/Education")
);

const Experience = lazy(() =>
  import("../pages/Experience/Experience")
);

const Projects = lazy(() =>
  import("../pages/Projects/Projects")
);

const Skills = lazy(() =>
  import("../pages/Skills/Skills")
);

const Certifications = lazy(() =>
  import("../pages/Certifications/Certifications")
);

const Goals = lazy(() =>
  import("../pages/Goals/Goals")
);

const AIMentor = lazy(() =>
  import("../pages/AIMentor/AIMentor")
);

const Interview = lazy(() =>
  import("../pages/Interview/Interview")
);

const Roadmaps = lazy(() =>
  import("../pages/Roadmaps/Roadmaps")
);

const SkillGap = lazy(() =>
  import("../pages/SkillGap/SkillGap")
);

const Reports = lazy(() =>
  import("../pages/Reports/Reports")
);

const ResumeScore = lazy(() =>
  import("../pages/ResumeScore/ResumeScore")
);

const AdvancedResumeScore = lazy(() =>
  import("../pages/AdvancedResumeScore/AdvancedResumeScore")
);

const CareerReadiness = lazy(() =>
  import("../pages/CareerReadiness/CareerReadiness")
);

const JobReadinessReport = lazy(() =>
  import("../pages/JobReadinessReport/JobReadinessReport")
);

const InterviewHistory = lazy(() =>
  import("../pages/InterviewHistory/InterviewHistory")
);

const ATSAnalyzer = lazy(() =>
  import("../pages/Reports/ATSAnalyzer")
);
const AppRouter = () => {
  return (
   <BrowserRouter>
  <Suspense fallback={<AethraLoader />}>
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
  </Suspense>
</BrowserRouter>
  );
};

export default AppRouter;
