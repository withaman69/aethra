const express =
  require("express");

const router =
  express.Router();

const {
  testAI,
} = require(
  "../controllers/aiTestController"
);

router.get(
  "/test",
  testAI
);

module.exports =
  router;