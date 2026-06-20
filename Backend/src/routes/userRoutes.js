const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");

const {
updateProfileSchema,
changePasswordSchema,
} = require("../validations/userValidation");

const {
getProfile,
updateProfile,
changePassword,
getPublicProfile,
searchUsers,
getAllUsers,
} = require("../controllers/userController");

// GET USER PROFILE
router.get(
"/profile",
protect,
getProfile
);

// UPDATE USER PROFILE
router.put(
"/profile",
protect,
validate(updateProfileSchema),
updateProfile
);

// CHANGE PASSWORD
router.put(
  "/change-password",
  protect,
  changePassword
);
router.get(
  "/",
  getAllUsers
);

router.get(
  "/search",
  searchUsers
);

router.get(
  "/public/:id",
  getPublicProfile
);


module.exports = router;
