const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  exportCareerReport,
} = require(
  "../controllers/pdfReportController"
);

router.get(
  "/export",
  protect,
  exportCareerReport
);

module.exports = router;