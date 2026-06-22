const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const {
  getSuggestions,
} = require(
  "../controllers/atsSuggestionController"
);

router.get(
  "/",
  protect,
  getSuggestions
);

module.exports = router;