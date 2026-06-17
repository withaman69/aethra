const authRoutes = require("./routes/authRoutes");
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const emailRoutes = require("./routes/emailRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");






dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/email", emailRoutes);
app.use(errorHandler);
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads")
  )
);
app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Aethra Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});