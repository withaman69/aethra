import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getProjects,
  createProject,
  deleteProject,
} from "../../features/projects/projectApi";

const Projects = () => {
  const [projects, setProjects] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      technologies: "",
      githubLink: "",
      liveLink: "",
      startDate: "",
      endDate: "",
    });

  const fetchProjects =
    async () => {
      try {
        const data =
          await getProjects();

        setProjects(data.data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchProjects();
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
        await createProject({
          ...formData,
          technologies:
            formData.technologies
              .split(",")
              .map((tech) =>
                tech.trim()
              ),
        });

        alert(
          "Project Added Successfully"
        );

        setFormData({
          title: "",
          description: "",
          technologies: "",
          githubLink: "",
          liveLink: "",
          startDate: "",
          endDate: "",
        });

        fetchProjects();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteProject(id);

        fetchProjects();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
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
          type="text"
          name="technologies"
          placeholder="React, Node.js, MongoDB"
          value={
            formData.technologies
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={
            formData.githubLink
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="liveLink"
          placeholder="Live Link"
          value={
            formData.liveLink
          }
          onChange={handleChange}
        />

        <input
          type="date"
          name="startDate"
          value={
            formData.startDate
          }
          onChange={handleChange}
        />

        <input
          type="date"
          name="endDate"
          value={
            formData.endDate
          }
          onChange={handleChange}
        />

        <button type="submit">
          Add Project
        </button>
      </form>

      <div>
        {projects.map(
          (project) => (
            <div
              key={project._id}
              className="border p-4 mb-4"
            >
              <h3>
                {project.title}
              </h3>

              <p>
                {
                  project.description
                }
              </p>

              <p>
                {project.technologies?.join(
                  ", "
                )}
              </p>

              <button
                onClick={() =>
                  handleDelete(
                    project._id
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

export default Projects;