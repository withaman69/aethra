const Certification =
  require("../models/Certification");

const createCertification =
  async (req, res) => {
    try {
      const certification =
        await Certification.create({
          ...req.body,
          user: req.user.id,
        });

      res.status(201).json({
        success: true,
        data: certification,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getCertifications =
  async (req, res) => {
    try {
      const certifications =
        await Certification.find({
          user: req.user.id,
        });

      res.status(200).json({
        success: true,
        count:
          certifications.length,
        data: certifications,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const getCertificationById =
  async (req, res) => {
    try {
      const certification =
        await Certification.findOne({
          _id: req.params.id,
          user: req.user.id,
        });

      if (!certification) {
        return res.status(404).json({
          success: false,
          message:
            "Certification not found",
        });
      }

      res.status(200).json({
        success: true,
        data: certification,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const updateCertification =
  async (req, res) => {
    try {
      const certification =
        await Certification.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!certification) {
        return res.status(404).json({
          success: false,
          message:
            "Certification not found",
        });
      }

      res.status(200).json({
        success: true,
        data: certification,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

const deleteCertification =
  async (req, res) => {
    try {
      const certification =
        await Certification.findOneAndDelete(
          {
            _id: req.params.id,
            user: req.user.id,
          }
        );

      if (!certification) {
        return res.status(404).json({
          success: false,
          message:
            "Certification not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Certification deleted successfully",
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
  createCertification,
  getCertifications,
  getCertificationById,
  updateCertification,
  deleteCertification,
};