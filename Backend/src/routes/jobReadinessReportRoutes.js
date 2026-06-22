const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getJobReadinessReport,
} = require(
  "../controllers/jobReadinessReportController"
);

router.get(
  "/",
  protect,
  getJobReadinessReport
);

module.exports = router;