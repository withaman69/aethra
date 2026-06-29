const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middlewares/authMiddleware"
  );

const {
  analyzeResume,
  getLatestAnalysis,
} = require(
  "../controllers/atsController"
);

router.post(
  "/analyze",
  protect,
  analyzeResume
);

router.get(
  "/latest",
  protect,
  getLatestAnalysis
);

module.exports =
  router;