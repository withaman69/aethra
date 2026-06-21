const Roadmap =
  require("../models/Roadmap");

const createRoadmap =
  async (req, res) => {
    try {
      const roadmap =
        await Roadmap.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: roadmap,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getRoadmaps =
  async (req, res) => {
    try {
      const roadmaps =
        await Roadmap.find();

      res.status(200).json({
        success: true,
        count:
          roadmaps.length,
        data: roadmaps,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getRoadmapById =
  async (req, res) => {
    try {
      const roadmap =
        await Roadmap.findById(
          req.params.id
        );

      if (!roadmap) {
        return res.status(404).json({
          success: false,
          message:
            "Roadmap not found",
        });
      }

      res.status(200).json({
        success: true,
        data: roadmap,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const updateRoadmap =
  async (req, res) => {
    try {
      const roadmap =
        await Roadmap.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      if (!roadmap) {
        return res.status(404).json({
          success: false,
          message:
            "Roadmap not found",
        });
      }

      res.status(200).json({
        success: true,
        data: roadmap,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const deleteRoadmap =
  async (req, res) => {
    try {
      const roadmap =
        await Roadmap.findByIdAndDelete(
          req.params.id
        );

      if (!roadmap) {
        return res.status(404).json({
          success: false,
          message:
            "Roadmap not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Roadmap deleted successfully",
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
  createRoadmap,
  getRoadmaps,
  getRoadmapById,
  updateRoadmap,
  deleteRoadmap,
};