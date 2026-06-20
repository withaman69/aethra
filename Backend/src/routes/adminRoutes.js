const express = require("express");

const router = express.Router();

const protect = require(
"../middlewares/authMiddleware"
);

const adminOnly = require(
"../middlewares/adminMiddleware"
);

const {
getAllUsers,
getUserById,
deleteUser,
changeUserRole,
} = require(
"../controllers/adminController"
);

// GET ALL USERS
router.get(
"/users",
protect,
adminOnly,
getAllUsers
);

// GET SINGLE USER BY ID
router.get(
"/users/:id",
protect,
adminOnly,
getUserById
);

router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);

router.put(
  "/users/:id/role",
  protect,
  adminOnly,
  changeUserRole
);

module.exports = router;
