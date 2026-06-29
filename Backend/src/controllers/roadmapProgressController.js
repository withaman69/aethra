const RoadmapProgress = require("../models/RoadmapProgress");

const saveProgress = async (req, res) => {
try {
const { roadmapId, completedSteps } = req.body;


let progress =
  await RoadmapProgress.findOne({
    user: req.user.id,
    roadmapId,
  });

if (progress) {
  progress.completedSteps =
    completedSteps;

  await progress.save();
} else {
  progress =
    await RoadmapProgress.create({
      user: req.user.id,
      roadmapId,
      completedSteps,
    });
}

res.status(200).json({
  success: true,
  data: progress,
});


} catch (error) {
console.error(error);

res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

const getProgress = async (req, res) => {
try {
const progress =
await RoadmapProgress.find({
user: req.user.id,
});


res.status(200).json({
  success: true,
  data: progress,
});


} catch (error) {
res.status(500).json({
success: false,
message: "Server Error",
});
}
};

module.exports = {
saveProgress,
getProgress,
};
