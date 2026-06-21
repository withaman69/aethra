const Education =
  require("../models/Education");

//
// CREATE EDUCATION
//
const createEducation =
  async (req, res) => {
    try {
      const education =
        await Education.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json({
        success: true,
        data: education,
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
// GET ALL EDUCATION
//
const getEducations =
  async (req, res) => {
    try {
      const educations =
        await Education.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        count:
          educations.length,
        data: educations,
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
// GET EDUCATION BY ID
//
const getEducationById =
  async (req, res) => {
    try {
      const education =
        await Education.findOne({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!education) {
        return res.status(404).json({
          success: false,
          message:
            "Education not found",
        });
      }

      res.status(200).json({
        success: true,
        data: education,
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
// UPDATE EDUCATION
//
const updateEducation =
  async (req, res) => {
    try {
      const education =
        await Education.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!education) {
        return res.status(404).json({
          success: false,
          message:
            "Education not found",
        });
      }

      res.status(200).json({
        success: true,
        data: education,
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
// DELETE EDUCATION
//
const deleteEducation =
  async (req, res) => {
    try {
      const education =
        await Education.findOneAndDelete({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!education) {
        return res.status(404).json({
          success: false,
          message:
            "Education not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Education deleted successfully",
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
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
};