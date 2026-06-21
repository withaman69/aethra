const express = require("express");

const router = express.Router();

const protect =
  require("../middlewares/authMiddleware");

const validate =
  require("../middlewares/validate");

const {
  certificationSchema,
} = require(
  "../validations/certificationValidation"
);

const {
  createCertification,
  getCertifications,
  getCertificationById,
  updateCertification,
  deleteCertification,
} = require(
  "../controllers/certificationController"
);

router.post(
  "/",
  protect,
  validate(certificationSchema),
  createCertification
);

router.get(
  "/",
  protect,
  getCertifications
);

router.get(
  "/:id",
  protect,
  getCertificationById
);

router.put(
  "/:id",
  protect,
  validate(certificationSchema),
  updateCertification
);

router.delete(
  "/:id",
  protect,
  deleteCertification
);

module.exports = router;