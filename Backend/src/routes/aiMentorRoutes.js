const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const { askMentor } = require("../controllers/aiMentorController");

router.post("/chat", protect, askMentor);

module.exports = router;
