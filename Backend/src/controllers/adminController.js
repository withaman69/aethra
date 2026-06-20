const User = require("../models/User");

// GET ALL USERS
const getAllUsers = async (
req,
res
) => {
try {
const users = await User.find().select(
"-password -resetPasswordToken -resetPasswordExpire"
);


res.status(200).json({
  success: true,
  count: users.length,
  data: users,
});


} catch (error) {
console.error(error);


res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

// GET USER BY ID
const getUserById = async (
req,
res
) => {
try {
const user = await User.findById(
req.params.id
).select(
"-password -resetPasswordToken -resetPasswordExpire"
);


if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

res.status(200).json({
  success: true,
  data: user,
});


} catch (error) {
console.error(error);


res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

// DELETE USER
const deleteUser = async (
req,
res
) => {
try {
const user = await User.findById(
req.params.id
);


if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

await User.findByIdAndDelete(
  req.params.id
);

res.status(200).json({
  success: true,
  message:
    "User deleted successfully",
});


} catch (error) {
console.error(error);


res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

// CHANGE USER ROLE
const changeUserRole = async (
req,
res
) => {
try {
const { role } = req.body;


if (
  role !== "user" &&
  role !== "admin"
) {
  return res.status(400).json({
    success: false,
    message: "Invalid role",
  });
}

const user = await User.findById(
  req.params.id
);

if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

user.role = role;

await user.save();

const safeUser =
  await User.findById(
    user._id
  ).select(
    "-password -resetPasswordToken -resetPasswordExpire"
  );

res.status(200).json({
  success: true,
  message:
    "User role updated successfully",
  data: safeUser,
});


} catch (error) {
console.error(error);


res.status(500).json({
  success: false,
  message: "Server Error",
});

}
};

module.exports = {
getAllUsers,
getUserById,
deleteUser,
changeUserRole,
};
