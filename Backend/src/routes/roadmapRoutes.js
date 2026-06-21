const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const admin =
  require("../middlewares/adminMiddleware");

const validate =
  require("../middlewares/validate");

const {
  roadmapSchema,
} = require(
  "../validations/roadmapValidation"
);

const {
  createRoadmap,
  getRoadmaps,
  getRoadmapById,
  updateRoadmap,
  deleteRoadmap,
} = require(
  "../controllers/roadmapController"
);

router.post(
  "/",
  protect,
  admin,
  validate(roadmapSchema),
  createRoadmap
);

router.get(
  "/",
  protect,
  getRoadmaps
);

router.get(
  "/:id",
  protect,
  getRoadmapById
);

router.put(
  "/:id",
  protect,
  admin,
  validate(roadmapSchema),
  updateRoadmap
);

router.delete(
  "/:id",
  protect,
  admin,
  deleteRoadmap
);

module.exports = router;