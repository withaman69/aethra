import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getExperiences,
  createExperience,
  deleteExperience,
} from "../../features/experience/experienceApi";

const Experience = () => {
  const [experiences, setExperiences] =
    useState([]);

  const [formData, setFormData] =
    useState({
      company: "",
      position: "",
      employmentType: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });

  const fetchExperiences =
    async () => {
      try {
        const data =
          await getExperiences();

        setExperiences(data.data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await createExperience(
          formData
        );

        alert(
          "Experience Added Successfully"
        );

        setFormData({
          company: "",
          position: "",
          employmentType: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        });

        fetchExperiences();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteExperience(id);

        fetchExperiences();
      } catch (error) {
        console.error(error);
      }
    };

return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">

  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Experience
    </h1>

    <p className="text-slate-400 mt-3">
      Showcase your professional journey.
    </p>

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
          Add Experience
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <label className="flex items-center gap-3 text-slate-300">

            <input
              type="checkbox"
              name="current"
              checked={formData.current}
              onChange={handleChange}
            />

            Currently Working Here

          </label>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
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
            Add Experience
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
          Experience Timeline
        </h2>

        <div className="space-y-5">

          {experiences.length === 0 ? (
            <p className="text-slate-400">
              No experience added yet.
            </p>
          ) : (
            experiences.map((exp) => (
              <div
                key={exp._id}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-5
                hover:border-cyan-400/40
                transition-all
              "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {exp.position}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {exp.company}
                    </p>

                    <p className="text-slate-400 mt-1">
                      {exp.location}
                    </p>

                    <p className="text-slate-500 text-sm mt-2">
                      {new Date(
                        exp.startDate
                      ).toLocaleDateString()}
                      {" - "}
                      {exp.current
                        ? "Present"
                        : new Date(
                            exp.endDate
                          ).toLocaleDateString()}
                    </p>

                    {exp.description && (
                      <p className="text-slate-300 mt-3">
                        {exp.description}
                      </p>
                    )}

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(
                        exp._id
                      )
                    }
                    className="
                    px-4
                    py-2
                    rounded-xl
                    bg-red-500/20
                    border
                    border-red-500/30
                    text-red-400
                    hover:bg-red-500/30
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

export default Experience;