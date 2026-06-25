const User = require("../models/User");
const bcrypt = require("bcryptjs");
const asyncHandler = require("../middlewares/asyncHandler");
const CustomError = require("../utils/customError");

// GET PROFILE
const getProfile = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user);

    const user = await User.findById(req.user.id)
      .select("-password -resetPasswordToken -resetPasswordExpire");

    console.log("FOUND USER:", user);

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.error("GET PROFILE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// UPDATE PROFILE
const updateProfile = async (req, res) => {
try {
const {
bio,
occupation,
skills,
goals,
avatar,
name,
} = req.body;


const user = await User.findById(req.user.id);

if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

user.name = name || user.name;
user.bio = bio || user.bio;
user.occupation =
  occupation || user.occupation;
user.skills = skills || user.skills;
user.goals = goals || user.goals;
user.avatar = avatar || user.avatar;
user.careerLevel =
  req.body.careerLevel ||
  user.careerLevel;
  
await user.save();

res.status(200).json({
  success: true,
  message:
    "Profile updated successfully",
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

// CHANGE PASSWORD
const changePassword = asyncHandler(
async (req, res) => {
const {
currentPassword,
newPassword,
} = req.body;


const user = await User.findById(
  req.user.id
).select("+password");

if (!user) {
  throw new CustomError(
    "User not found",
    404
  );
}

const isMatch = await bcrypt.compare(
  currentPassword,
  user.password
);

if (!isMatch) {
  throw new CustomError(
    "Current password is incorrect",
    400
  );
}

const hashedPassword =
  await bcrypt.hash(
    newPassword,
    10
  );

user.password = hashedPassword;

await user.save();

res.status(200).json({
  success: true,
  message:
    "Password changed successfully",
});


}
);

const getPublicProfile = async (
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

const searchUsers = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const users = await User.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    }).select(
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

const getAllUsers = async (req, res) => {
  try {
    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 10;

    const skip =
      (page - 1) * limit;

    const totalUsers =
      await User.countDocuments();

    const keyword =
  req.query.keyword || "";

const sort =
  req.query.sort || "-createdAt";

const users = await User.find({
  name: {
    $regex: keyword,
    $options: "i",
  },
})
  .select(
    "-password -resetPasswordToken -resetPasswordExpire"
  )
  .sort(sort)
  .skip(skip)
  .limit(limit);

    res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(
        totalUsers / limit
      ),
      totalUsers,
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

module.exports = {
getProfile,
updateProfile,
changePassword,
getPublicProfile,
searchUsers,
getAllUsers,
};
