const Skill = require("../models/Skill");

//
// CREATE SKILL
//
const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//
// GET ALL SKILLS
//
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//
// GET SKILL BY ID
//
const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//
// UPDATE SKILL
//
const updateSkill = async (req, res) => {
  try {
    const skill =
      await Skill.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user.id,
        },
        req.body,
        {
          new: true,
        }
      );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//
// DELETE SKILL
//
const deleteSkill = async (req, res) => {
  try {
    const skill =
      await Skill.findOneAndDelete({
        _id: req.params.id,
        user: req.user.id,
      });

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Skill deleted successfully",
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
  createSkill,
  getSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
};