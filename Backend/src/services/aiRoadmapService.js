const generateRoadmap = (
  targetRole,
  currentSkills
) => {
  const roadmap = [];

  if (
    targetRole
      .toLowerCase()
      .includes("backend")
  ) {
    roadmap.push({
      phase: "Phase 1",
      duration: "1 Month",
      skills: [
        "Express.js",
        "Authentication",
        "REST APIs",
      ],
    });

    roadmap.push({
      phase: "Phase 2",
      duration: "1 Month",
      skills: [
        "MongoDB",
        "Aggregation",
        "Indexes",
      ],
    });

    roadmap.push({
      phase: "Phase 3",
      duration: "1 Month",
      skills: [
        "Docker",
        "Redis",
        "AWS",
      ],
    });

    roadmap.push({
      phase: "Phase 4",
      duration: "1 Month",
      skills: [
        "System Design",
        "Scalability",
      ],
    });
  }

  return roadmap;
};

module.exports = {
  generateRoadmap,
};