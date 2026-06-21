const MentorRequest = require("../models/MentorRequest");

const sendMentorRequest = async (req, res) => {
  try {
    const { mentorId } = req.body;

    const request = await MentorRequest.create({
      mentee: req.user.id,
      mentor: mentorId,
    });

    res.status(201).json({
      success: true,
      data: request,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyRequests = async (req, res) => {
  try {
    const requests = await MentorRequest.find({
      mentee: req.user.id,
    }).populate("mentor", "name email");

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
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
  sendMentorRequest,
  getMyRequests,
};