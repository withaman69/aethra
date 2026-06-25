import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
getGoals,
createGoal,
deleteGoal,
} from "../../features/goals/goalApi";

const Goals = () => {
const [goals, setGoals] =
useState([]);

const [formData, setFormData] =
useState({
title: "",
description: "",
targetDate: "",
status: "Not Started",
progress: 0,
});

const fetchGoals =
async () => {
try {
const data =
await getGoals();


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
[e.target.name]:
e.target.value,
});
};

const handleSubmit =
async (e) => {
e.preventDefault();


  try {
    await createGoal(
      formData
    );

    alert(
      "Goal Added Successfully"
    );

    setFormData({
      title: "",
      description: "",
      targetDate: "",
      status: "Not Started",
      progress: 0,
    });

    fetchGoals();
  } catch (error) {
    console.error(error);
  }
};


const handleDelete =
async (id) => {
try {
await deleteGoal(id);


    fetchGoals();
  } catch (error) {
    console.error(error);
  }
};


return (
    <DashboardLayout>
    <div className="p-6"> <h1 className="text-3xl font-bold mb-6">
Goals </h1>


  <form
    onSubmit={handleSubmit}
    className="space-y-4 mb-8"
  >
    <input
      type="text"
      name="title"
      placeholder="Goal Title"
      value={formData.title}
      onChange={handleChange}
    />

    <textarea
      name="description"
      placeholder="Description"
      value={
        formData.description
      }
      onChange={handleChange}
    />

    <input
      type="date"
      name="targetDate"
      value={
        formData.targetDate
      }
      onChange={handleChange}
    />

    <select
      name="status"
      value={formData.status}
      onChange={handleChange}
    >
      <option>
        Not Started
      </option>

      <option>
        In Progress
      </option>

      <option>
        Completed
      </option>
    </select>

    <input
      type="number"
      name="progress"
      min="0"
      max="100"
      placeholder="Progress %"
      value={
        formData.progress
      }
      onChange={handleChange}
    />

    <button
      type="submit"
    >
      Add Goal
    </button>
  </form>

  <div>
    {goals.map((goal) => (
      <div
        key={goal._id}
        className="border p-4 mb-4 rounded"
      >
        <h3 className="text-xl font-bold">
          {goal.title}
        </h3>

        <p>
          {
            goal.description
          }
        </p>

        <p>
          Status:
          {" "}
          {goal.status}
        </p>

        <p>
          Progress:
          {" "}
          {goal.progress}%
        </p>

        <p>
          Target Date:
          {" "}
          {goal.targetDate
            ? new Date(
                goal.targetDate
              ).toLocaleDateString()
            : "N/A"}
        </p>

        <div className="w-full bg-gray-200 rounded h-3 mt-2 mb-3">
          <div
            className="bg-blue-500 h-3 rounded"
            style={{
              width: `${goal.progress}%`,
            }}
          />
        </div>

        <button
          onClick={() =>
            handleDelete(
              goal._id
            )
          }
        >
          Delete
        </button>
      </div>
    ))}
  </div>
</div>
</DashboardLayout>

);
};

export default Goals;
