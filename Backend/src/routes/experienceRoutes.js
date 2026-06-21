const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const validate =
  require("../middlewares/validate");

const {
  experienceSchema,
} = require(
  "../validations/experienceValidation"
);

const {
  createExperience,
  getExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
} = require(
  "../controllers/experienceController"
);

router.post(
  "/",
  protect,
  validate(experienceSchema),
  createExperience
);

router.get(
  "/",
  protect,
  getExperiences
);

router.get(
  "/:id",
  protect,
  getExperienceById
);

router.put(
  "/:id",
  protect,
  validate(experienceSchema),
  updateExperience
);

router.delete(
  "/:id",
  protect,
  deleteExperience
);

module.exports = router;