import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../../features/goals/goalApi";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetDate: "",
    status: "Not Started",
    progress: 0,
  });

  const fetchGoals = async () => {
    try {
      const data = await getGoals();
      setGoals(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingGoal) {
        await updateGoal(editingGoal._id, formData);

        alert("Goal Updated Successfully");
      } else {
        await createGoal(formData);

        alert("Goal Added Successfully");
      }

      setFormData({
        title: "",
        description: "",
        targetDate: "",
        status: "Not Started",
        progress: 0,
      });

      setEditingGoal(null);

      fetchGoals();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGoal(id);
      fetchGoals();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (goal) => {
    setEditingGoal(goal);

    setFormData({
      title: goal.title || "",
      description: goal.description || "",
      targetDate: goal.targetDate
        ? goal.targetDate.split("T")[0]
        : "",
      status: goal.status || "Not Started",
      progress: goal.progress || 0,
    });
  };

return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Career Goals
    </h1>

    <p className="text-slate-400 mt-3">
      Track your career milestones and stay focused.
    </p>

  </div>

  <div className="grid md:grid-cols-4 gap-4 mb-8">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Total Goals</p>
      <h2 className="text-3xl font-bold text-cyan-300">
        {goals.length}
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Completed</p>
      <h2 className="text-3xl font-bold text-green-300">
        {
          goals.filter(
            (g) => g.status === "Completed"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">In Progress</p>
      <h2 className="text-3xl font-bold text-purple-300">
        {
          goals.filter(
            (g) => g.status === "In Progress"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Success Rate</p>
      <h2 className="text-3xl font-bold text-orange-300">
        {goals.length > 0
          ? Math.round(
              (goals.filter(
                (g) =>
                  g.status === "Completed"
              ).length /
                goals.length) *
                100
            )
          : 0}
        %
      </h2>
    </div>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="lg:col-span-1">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          {editingGoal
            ? "Update Goal"
            : "Create Goal"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="title"
            placeholder="Goal Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <input
            type="date"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="number"
            name="progress"
            min="0"
            max="100"
            value={formData.progress}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <button
            type="submit"
            className="
            w-full
            py-3
            rounded-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-[1.02]
            transition-all
            "
          >
            {editingGoal
              ? "Update Goal"
              : "Add Goal"}
          </button>

        </form>

      </div>

    </div>

    <div className="lg:col-span-2">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-purple-300 mb-6">
          Goal Tracker
        </h2>

        <div className="space-y-5">

          {goals.length === 0 ? (
            <p className="text-slate-400">
              No goals created yet.
            </p>
          ) : (
            goals.map((goal) => (
              <div
                key={goal._id}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400/60
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-white">
                      {goal.title}
                    </h3>

                    <p className="text-slate-300 mt-3">
                      {goal.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">

                      <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
                        {goal.status}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm">
                        {goal.progress}% Complete
                      </span>

                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-3 mt-5">

                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full"
                        style={{
                          width: `${goal.progress}%`,
                        }}
                      />

                    </div>

                    {goal.targetDate && (
                      <p className="text-slate-400 mt-4">
                        Target:
                        {" "}
                        {new Date(
                          goal.targetDate
                        ).toLocaleDateString()}
                      </p>
                    )}

                  </div>

                  <div className="flex gap-2 ml-4">

                    <button
                      onClick={() =>
                        handleEdit(goal)
                      }
                      className="
                      px-4
                      py-2
                      rounded-xl
                      bg-yellow-500/20
                      border
                      border-yellow-500/30
                      text-yellow-300
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(goal._id)
                      }
                      className="
                      px-4
                      py-2
                      rounded-xl
                      bg-red-500/20
                      border
                      border-red-500/30
                      text-red-400
                      "
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>

  </div>

</div>

  </DashboardLayout>
);

};

export default Goals;