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
console.log(req.file);

user.avatar = req.file.path;

await user.save();

res.status(200).json({
success: true,
message: "Avatar uploaded successfully",
avatar: req.file.path,
});
});
const uploadResume = asyncHandler(async (req, res) => {

  console.log(
    "========== RESUME UPLOAD START =========="
  );

  console.log(
    "USER ID:",
    req.user?.id
  );

  console.log(
    "FILE:",
    req.file
  );

  if (!req.file) {
    throw new CustomError(
      "Please upload a resume",
      400
    );
  }

  const user =
    await User.findById(
      req.user.id
    );

  console.log(
    "USER FOUND:",
    user
  );

  if (!user) {
    throw new CustomError(
      "User not found",
      404
    );
  }

  user.resume =
    req.file.path;

  console.log(
    "RESUME URL:",
    req.file.path
  );

  await user.save();

  console.log(
    "USER SAVED SUCCESSFULLY"
  );

  const updatedUser =
    await User.findById(
      req.user.id
    );

  console.log(
    "UPDATED USER:",
    updatedUser
  );

  console.log(
    "========== RESUME UPLOAD END =========="
  );

  res.status(200).json({
    success: true,
    message:
      "Resume uploaded successfully",
    resume:
      req.file.path,
  });
});

module.exports = {
uploadAvatar,uploadResume,
};
