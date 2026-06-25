const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const validate = require("../middlewares/validate");

const {
  skillSchema,
} = require(
  "../validations/skillValidation"
);

const {
  createSkill,
  getSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
} = require(
  "../controllers/skillController"
);

router.post(
  "/",
  protect,
  validate(skillSchema),
  createSkill
);

router.get(
  "/",
  protect,
  getSkills
);

router.get(
  "/:id",
  protect,
  getSkillById
);

router.put(
  "/:id",
  protect,
  validate(skillSchema),
  updateSkill
);

router.delete(
  "/:id",
  protect,
  deleteSkill
);

module.exports = router;