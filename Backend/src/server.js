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

dotenv.config();


dotenv.config();





connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Static Files
app.use(
"/uploads",
express.static(
path.join(__dirname, "../uploads")
)
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/upload", uploadRoutes);

// Home Route
app.get("/", (req, res) => {
res.send("Welcome to Aethra Backend");
});

// Global Error Handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(
`Server running on port ${PORT}`
);
});
