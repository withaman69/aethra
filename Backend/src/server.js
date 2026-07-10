require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const emailRoutes = require("./routes/emailRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const educationRoutes = require("./routes/educationRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const projectRoutes = require("./routes/projectRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const goalRoutes = require("./routes/goalRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const mentorRoutes = require("./routes/mentorRoutes");
const skillGapRoutes = require("./routes/skillGapRoutes");
const resumeAnalysisRoutes = require("./routes/resumeAnalysisRoutes");
const aiMentorRoutes = require("./routes/aiMentorRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const aiRoadmapRoutes = require("./routes/aiRoadmapRoutes");
const aiResumeReviewRoutes = require("./routes/aiResumeReviewRoutes");
const aiCareerAnalysisRoutes = require("./routes/aiCareerAnalysisRoutes");
const aiRoadmapGeneratorRoutes = require("./routes/aiRoadmapGeneratorRoutes");
const resumeScoreRoutes = require("./routes/resumeScoreRoutes");
const atsSuggestionRoutes = require("./routes/atsSuggestionRoutes");
const advancedResumeScoreRoutes = require("./routes/advancedResumeScoreRoutes");
const careerReadinessRoutes = require("./routes/careerReadinessRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const mockInterviewRoutes = require("./routes/mockInterviewRoutes");
const interviewEvaluationRoutes = require("./routes/interviewEvaluationRoutes");
const jobReadinessReportRoutes = require("./routes/jobReadinessReportRoutes");
const pdfReportRoutes = require("./routes/pdfReportRoutes");
const profileRoutes = require("./routes/profileRoutes");
const roadmapProgressRoutes =
require("./routes/roadmapProgressRoutes");
const goalProgressRoutes =
  require(
    "./routes/goalProgressRoutes"
  );
const skillRoutes =
  require("./routes/skillRoutes");
  const aiTestRoutes =
  require(
    "./routes/aiTestRoutes"
  );
dotenv.config();

connectDB();

const app = express();
app.set("trust proxy", 1);
app.use(helmet());

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

// Body Parser
app.use(express.json());

// Static Files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/education", educationRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Aethra Backend");
});
app.use("/api/experience", experienceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/roadmaps", roadmapRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/resume-analysis", resumeAnalysisRoutes);
app.use("/api/ai-mentor", aiMentorRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/ai-roadmap", aiRoadmapRoutes);
app.use("/api/ai-resume", aiResumeReviewRoutes);

app.use("/api/ai-roadmap-generator", aiRoadmapGeneratorRoutes);
app.use("/api/resume-score", resumeScoreRoutes);
app.use("/api/ats-suggestions", atsSuggestionRoutes);
app.use("/api/advanced-resume-score", advancedResumeScoreRoutes);
app.use("/api/career-readiness", careerReadinessRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/mock-interview", mockInterviewRoutes);
app.use("/api/interview-evaluation", interviewEvaluationRoutes);
app.use("/api/job-readiness-report", jobReadinessReportRoutes);
app.use("/api/pdf-report", pdfReportRoutes);
app.use("/api/profile", profileRoutes);
app.use(
  "/api/ai-roadmap-generator",
  aiRoadmapGeneratorRoutes
);
app.use(
  "/api/ai-career-analysis",
  aiCareerAnalysisRoutes
);
app.use(
  "/api/ai",
  aiTestRoutes
);
app.use(
  "/api/ats",
  require(
    "./routes/atsRoutes"
  )
);
app.use(
"/api/roadmap-progress",
roadmapProgressRoutes
);
app.use(
  "/api/skills",
  skillRoutes
);
app.use(
  "/api/goal-progress",
  goalProgressRoutes
);
app.use(
  "/api/goal-analytics",
  require("./routes/goalAnalyticsRoutes")
);

// Global Error Handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
