import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getEducations,
  createEducation,
  deleteEducation,
} from "../../features/education/educationApi";

const Education = () => {
  const [educations, setEducations] =
    useState([]);

  const [formData, setFormData] =
    useState({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });

  const fetchEducations =
    async () => {
      try {
        const data =
          await getEducations();

        setEducations(data.data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchEducations();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } =
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
        await createEducation(
          formData
        );

        alert(
          "Education Added"
        );

        setFormData({
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        });

        fetchEducations();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteEducation(id);

        fetchEducations();
      } catch (error) {
        console.error(error);
      }
    };

  return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Education
    </h1>

    <p className="text-slate-400 mt-3">
      Manage your academic journey.
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
          Add Education
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={formData.institution}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="fieldOfStudy"
            placeholder="Field Of Study"
            value={formData.fieldOfStudy}
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

            Currently Studying

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
            Add Education
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
          Education Timeline
        </h2>

        <div className="space-y-5">

          {educations.length === 0 ? (
            <p className="text-slate-400">
              No education added yet.
            </p>
          ) : (
            educations.map((edu) => (
              <div
                key={edu._id}
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
                      {edu.degree}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {edu.institution}
                    </p>

                    <p className="text-slate-400 mt-1">
                      {edu.fieldOfStudy}
                    </p>

                    {edu.description && (
                      <p className="text-slate-300 mt-3">
                        {edu.description}
                      </p>
                    )}

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(
                        edu._id
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

export default Education;