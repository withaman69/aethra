const User = require("../models/User");
const asyncHandler = require("../middlewares/asyncHandler");
const CustomError = require("../utils/customError");

// GET PROFILE
exports.getProfile = asyncHandler(
  async (req, res, next) => {
    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return next(
        new CustomError(
          "User not found",
          404
        )
      );
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  }
);

// UPDATE PROFILE
exports.updateProfile = asyncHandler(
  async (req, res, next) => {
    const {
      name,
      headline,
      location,
      about,
      linkedin,
      github,
      portfolio,
      phone,
      occupation,
      bio,
      careerLevel,
    } = req.body;

    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return next(
        new CustomError(
          "User not found",
          404
        )
      );
    }

    user.name =
      name ?? user.name;

    user.headline =
      headline ??
      user.headline;

    user.location =
      location ??
      user.location;

    user.about =
      about ?? user.about;

    user.linkedin =
      linkedin ??
      user.linkedin;

    user.github =
      github ??
      user.github;

    user.portfolio =
      portfolio ??
      user.portfolio;

    user.phone =
      phone ?? user.phone;

    user.occupation =
      occupation ??
      user.occupation;

    user.bio =
      bio ?? user.bio;

    user.careerLevel =
      careerLevel ??
      user.careerLevel;

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Profile updated successfully",
      data: user,
    });
  }
);
exports.updateAvatar = asyncHandler(
  async (req, res, next) => {
    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return next(
        new CustomError(
          "User not found",
          404
        )
      );
    }

    if (!req.file) {
      return next(
        new CustomError(
          "No image uploaded",
          400
        )
      );
    }

    user.avatar = req.file.path;

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Avatar updated successfully",
      avatar: user.avatar,
    });
  }
);