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


return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Skills
    </h1>

    <p className="text-slate-400 mt-3">
      Build your professional skill inventory.
    </p>

  </div>

  <div className="grid md:grid-cols-4 gap-4 mb-8">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Total Skills</p>
      <h2 className="text-3xl font-bold text-cyan-300">
        {skills.length}
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Advanced+</p>
      <h2 className="text-3xl font-bold text-purple-300">
        {
          skills.filter(
            (s) =>
              s.level === "Advanced" ||
              s.level === "Expert"
          ).length
        }
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Categories</p>
      <h2 className="text-3xl font-bold text-green-300">
        {
          [...new Set(
            skills.map(
              (s) => s.category
            )
          )].length
        }
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Growth</p>
      <h2 className="text-3xl font-bold text-orange-300">
        100%
      </h2>
    </div>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="lg:col-span-1">

      <div
        className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
      "
      >

        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          Add Skill
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            className="
            w-full
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-3
            text-white
            placeholder:text-slate-500
            "
          />

          <input
            type="text"
            name="category"
            placeholder="Frontend / Backend / AI"
            value={formData.category}
            onChange={handleChange}
            className="
            w-full
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-3
            text-white
            placeholder:text-slate-500
            "
          />

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="
            w-full
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-3
            text-white
            "
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>

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
            Add Skill
          </button>

        </form>

      </div>

    </div>

    <div className="lg:col-span-2">

      <div
        className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
      "
      >

        <h2 className="text-2xl font-bold text-purple-300 mb-6">
          Skill Library
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {skills.length === 0 ? (
            <p className="text-slate-400">
              No skills added yet.
            </p>
          ) : (
            skills.map((skill) => (
              <div
                key={skill._id}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-5
                hover:border-cyan-400/60
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>

                    <p className="text-slate-400 mt-2">
                      {skill.category}
                    </p>

                    <span
                      className="
                      inline-block
                      mt-4
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/20
                      border
                      border-cyan-500/30
                      text-cyan-300
                      text-sm
                      "
                    >
                      {skill.level}
                    </span>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(skill._id)
                    }
                    className="
                    px-3
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

export default Skills;
