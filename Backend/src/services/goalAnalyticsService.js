const buildGoalAnalytics = (goals) => {
  const totalGoals = goals.length;

  const completedGoals =
    goals.filter(
      (goal) =>
        goal.status ===
        "Completed"
    ).length;

  const inProgressGoals =
    goals.filter(
      (goal) =>
        goal.status ===
        "In Progress"
    ).length;

  const averageProgress =
    totalGoals > 0
      ? Math.round(
          goals.reduce(
            (sum, goal) =>
              sum +
              goal.progress,
            0
          ) / totalGoals
        )
      : 0;

  return {
    totalGoals,
    completedGoals,
    inProgressGoals,
    averageProgress,
  };
};

module.exports = {
  buildGoalAnalytics,
};