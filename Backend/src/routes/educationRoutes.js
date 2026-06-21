const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middlewares/authMiddleware");

const validate =
  require("../middlewares/validate");

const {
  educationSchema,
} = require(
  "../validations/educationValidation"
);

const {
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
} = require(
  "../controllers/educationController"
);

router.post(
  "/",
  protect,
  validate(
    educationSchema
  ),
  createEducation
);

router.get(
  "/",
  protect,
  getEducations
);


router.get(
  "/:id",
  protect,
  getEducationById
);

router.put(
  "/:id",
  protect,
  validate(
    educationSchema
  ),
  updateEducation
);

router.delete(
  "/:id",
  protect,
  deleteEducation
);
module.exports = router;