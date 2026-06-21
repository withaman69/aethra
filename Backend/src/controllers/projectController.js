const Project =
  require("../models/Project");

const createProject =
  async (req, res) => {
    try {
      const project =
        await Project.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json({
        success: true,
        data: project,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getProjects =
  async (req, res) => {
    try {
      const projects =
        await Project.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        count:
          projects.length,
        data: projects,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getProjectById =
  async (req, res) => {
    try {
      const project =
        await Project.findOne({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const updateProject =
  async (req, res) => {
    try {
      const project =
        await Project.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const deleteProject =
  async (req, res) => {
    try {
      const project =
        await Project.findOneAndDelete({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Project deleted successfully",
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
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};