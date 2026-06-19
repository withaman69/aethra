const User = require("../models/User");
const asyncHandler = require("../middlewares/asyncHandler");
const CustomError = require("../utils/customError");

const uploadAvatar = asyncHandler(async (req, res) => {
if (!req.file) {
throw new CustomError(
"Please upload an image",
400
);
}

const user = await User.findById(req.user.id);

if (!user) {
throw new CustomError(
"User not found",
404
);
}

user.avatar = req.file.path;

await user.save();

res.status(200).json({
success: true,
message: "Avatar uploaded successfully",
avatar: req.file.path,
});
});


module.exports = {
uploadAvatar,
};
