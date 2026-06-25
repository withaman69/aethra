import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        AETHRA
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/education">
          Education
        </NavLink>

        <NavLink to="/experience">
  Experience
</NavLink>

<NavLink to="/projects">
  Projects
</NavLink>
<NavLink to="/skills">
  Skills
</NavLink>
        <NavLink to="/resume">
          Resume
        </NavLink>

        <NavLink to="/certifications">
  Certifications
</NavLink>

        <NavLink to="/roadmaps">
          Roadmaps
        </NavLink>

        <NavLink to="/mentor">
  AI Mentor
</NavLink>

        <NavLink to="/goals">
  Goals
</NavLink>
<NavLink to="/roadmaps">
  Roadmaps
</NavLink>
<NavLink to="/skill-gap">
  Skill Gap
</NavLink>

        <NavLink to="/interview">
          Interviews
        </NavLink>

        <NavLink to="/reports">
          Reports
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;