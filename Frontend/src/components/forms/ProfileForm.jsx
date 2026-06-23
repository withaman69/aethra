import { useState, useEffect } from "react";

const ProfileForm = ({
  profile,
  onSubmit,
  loading,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      bio: "",
      occupation: "",
      careerLevel: "student",
      skills: "",
      goals: "",
    });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        bio: profile.bio || "",
        occupation:
          profile.occupation || "",
        careerLevel:
          profile.careerLevel ||
          "student",
        skills:
          profile.skills?.join(", ") ||
          "",
        goals:
          profile.goals?.join(", ") ||
          "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      skills: formData.skills
        .split(",")
        .map((skill) =>
          skill.trim()
        )
        .filter(Boolean),

      goals: formData.goals
        .split(",")
        .map((goal) =>
          goal.trim()
        )
        .filter(Boolean),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="occupation"
        placeholder="Occupation"
        value={
          formData.occupation
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <select
        name="careerLevel"
        value={
          formData.careerLevel
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      >
        <option value="student">
          Student
        </option>

        <option value="fresher">
          Fresher
        </option>

        <option value="experienced">
          Experienced
        </option>
      </select>

      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="goals"
        placeholder="Goals (comma separated)"
        value={formData.goals}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="
        bg-blue-600
        text-white
        px-5
        py-3
        rounded
        "
      >
        {loading
          ? "Saving..."
          : "Save Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;