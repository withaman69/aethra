const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const validate =
  require("../middlewares/validate");

const {
  projectSchema,
} = require(
  "../validations/projectValidation"
);

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require(
  "../controllers/projectController"
);

router.post(
  "/",
  protect,
  validate(projectSchema),
  createProject
);

router.get(
  "/",
  protect,
  getProjects
);

router.get(
  "/:id",
  protect,
  getProjectById
);

router.put(
  "/:id",
  protect,
  validate(projectSchema),
  updateProject
);

router.delete(
  "/:id",
  protect,
  deleteProject
);

module.exports = router;