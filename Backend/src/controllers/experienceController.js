const Experience =
  require("../models/Experience");

//
// CREATE EXPERIENCE
//
const createExperience =
  async (req, res) => {
    try {
      const experience =
        await Experience.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json({
        success: true,
        data: experience,
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
// GET ALL EXPERIENCES
//
const getExperiences =
  async (req, res) => {
    try {
      const experiences =
        await Experience.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        count:
          experiences.length,
        data: experiences,
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
// GET EXPERIENCE BY ID
//
const getExperienceById =
  async (req, res) => {
    try {
      const experience =
        await Experience.findOne({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!experience) {
        return res.status(404).json({
          success: false,
          message:
            "Experience not found",
        });
      }

      res.status(200).json({
        success: true,
        data: experience,
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
// UPDATE EXPERIENCE
//
const updateExperience =
  async (req, res) => {
    try {
      const experience =
        await Experience.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!experience) {
        return res.status(404).json({
          success: false,
          message:
            "Experience not found",
        });
      }

      res.status(200).json({
        success: true,
        data: experience,
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
// DELETE EXPERIENCE
//
const deleteExperience =
  async (req, res) => {
    try {
      const experience =
        await Experience.findOneAndDelete({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!experience) {
        return res.status(404).json({
          success: false,
          message:
            "Experience not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Experience deleted successfully",
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
  createExperience,
  getExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
};