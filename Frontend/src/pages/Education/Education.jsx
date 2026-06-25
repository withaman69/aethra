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

  return (
     <DashboardLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Education
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={
            formData.institution
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="fieldOfStudy"
          placeholder="Field Of Study"
          value={
            formData.fieldOfStudy
          }
          onChange={
            handleChange
          }
        />

        <input
          type="date"
          name="startDate"
          value={
            formData.startDate
          }
          onChange={
            handleChange
          }
        />

        <input
          type="date"
          name="endDate"
          value={
            formData.endDate
          }
          onChange={
            handleChange
          }
        />

        <label>
          <input
            type="checkbox"
            name="current"
            checked={
              formData.current
            }
            onChange={
              handleChange
            }
          />
          Currently Studying
        </label>

        <textarea
          name="description"
          placeholder="Description"
          value={
            formData.description
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          Add Education
        </button>
      </form>

      <div>
        {educations.map(
          (edu) => (
            <div
              key={edu._id}
              className="border p-4 mb-4"
            >
              <h3>
                {edu.degree}
              </h3>

              <p>
                {
                  edu.institution
                }
              </p>

              <p>
                {
                  edu.fieldOfStudy
                }
              </p>

              <button
                onClick={() =>
                  handleDelete(
                    edu._id
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

export default Education;