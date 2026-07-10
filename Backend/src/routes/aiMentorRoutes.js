const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  askMentor,
} = require("../controllers/aiMentorController");

router.post(
  "/ask",
  protect,
  askMentor
);

module.exports = router;