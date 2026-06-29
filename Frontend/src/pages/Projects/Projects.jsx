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

 return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Projects
    </h1>

    <p className="text-slate-400 mt-3">
      Showcase your best work and portfolio.
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
          Add Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="technologies"
            placeholder="React, Node.js, MongoDB"
            value={formData.technologies}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="githubLink"
            placeholder="GitHub URL"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live Demo URL"
            value={formData.liveLink}
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
            Add Project
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
          Project Portfolio
        </h2>

        <div className="space-y-5">

          {projects.length === 0 ? (
            <p className="text-slate-400">
              No projects added yet.
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400/40
                transition-all
              "
              >

                <div className="flex justify-between items-start">

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mt-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.technologies?.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="
                            bg-cyan-500/20
                            border
                            border-cyan-500/30
                            text-cyan-300
                            px-3
                            py-1
                            rounded-full
                            text-sm
                          "
                          >
                            {tech}
                          </span>
                        )
                      )}

                    </div>

                    <div className="flex gap-3 mt-5">

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="
                          px-4
                          py-2
                          rounded-xl
                          bg-purple-500/20
                          border
                          border-purple-500/30
                          text-purple-300
                        "
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="
                          px-4
                          py-2
                          rounded-xl
                          bg-green-500/20
                          border
                          border-green-500/30
                          text-green-300
                        "
                        >
                          Live Demo
                        </a>
                      )}

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(project._id)
                    }
                    className="
                    ml-4
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

export default Projects;