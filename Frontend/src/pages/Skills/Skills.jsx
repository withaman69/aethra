import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
getSkills,
createSkill,
deleteSkill,
} from "../../features/skills/skillApi";

const Skills = () => {
const [skills, setSkills] =
useState([]);

const [formData, setFormData] =
useState({
name: "",
category: "",
level: "Beginner",
});

const fetchSkills =
async () => {
try {
const data =
await getSkills();
    setSkills(data.data);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
fetchSkills();
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
    await createSkill(
      formData
    );

    alert(
      "Skill Added Successfully"
    );

    setFormData({
      name: "",
      category: "",
      level: "Beginner",
    });

    fetchSkills();
  } catch (error) {
    console.error(error);
  }
};


const handleDelete =
async (id) => {
try {
await deleteSkill(id);


    fetchSkills();
  } catch (error) {
    console.error(error);
  }
};


return ( 
<DashboardLayout>
<div className="p-6"> <h1 className="text-3xl font-bold mb-6">
Skills </h1>


  <form
    onSubmit={handleSubmit}
    className="space-y-4 mb-8"
  >
    <input
      type="text"
      name="name"
      placeholder="Skill Name"
      value={formData.name}
      onChange={handleChange}
    />

    <input
      type="text"
      name="category"
      placeholder="Category"
      value={formData.category}
      onChange={handleChange}
    />

    <select
      name="level"
      value={formData.level}
      onChange={handleChange}
    >
      <option>
        Beginner
      </option>

      <option>
        Intermediate
      </option>

      <option>
        Advanced
      </option>

      <option>
        Expert
      </option>
    </select>

    <button type="submit">
      Add Skill
    </button>
  </form>

  <div>
    {skills.map((skill) => (
      <div
        key={skill._id}
        className="border p-4 mb-4"
      >
        <h3>{skill.name}</h3>

        <p>
          {skill.category}
        </p>

        <p>{skill.level}</p>

        <button
          onClick={() =>
            handleDelete(
              skill._id
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

export default Skills;
