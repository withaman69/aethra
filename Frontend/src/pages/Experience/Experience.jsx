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

  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Experience
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
        />

        <input
          type="text"
          name="employmentType"
          placeholder="Employment Type"
          value={
            formData.employmentType
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />

        <label>
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
          value={
            formData.description
          }
          onChange={handleChange}
        />

        <button type="submit">
          Add Experience
        </button>
      </form>

      <div>
        {experiences.map(
          (experience) => (
            <div
              key={experience._id}
              className="border p-4 mb-4"
            >
              <h3>
                {
                  experience.position
                }
              </h3>

              <p>
                {
                  experience.company
                }
              </p>

              <p>
                {
                  experience.location
                }
              </p>

              <button
                onClick={() =>
                  handleDelete(
                    experience._id
                  )
                }
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Experience;