
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import AppBackground from "./AppBackground";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiBook,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiTarget,
  FiMap,
  FiCpu,
  FiMic,
  FiBarChart2,
} from "react-icons/fi";


const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Profile", path: "/profile", icon: FiUser },
  { name: "Resume", path: "/resume", icon: FiFileText },
  { name: "Education", path: "/education", icon: FiBook },
  { name: "Experience", path: "/experience", icon: FiBriefcase },
  { name: "Projects", path: "/projects", icon: FiFolder },
  { name: "Skills", path: "/skills", icon: FiCpu },
  { name: "Certifications", path: "/certifications", icon: FiAward },
  { name: "Goals", path: "/goals", icon: FiTarget },
  { name: "Roadmaps", path: "/roadmaps", icon: FiMap },
  { name: "AI Mentor", path: "/mentor", icon: FiCpu },
  { name: "Interview", path: "/interview", icon: FiMic },
  { name: "Reports", path: "/reports", icon: FiBarChart2 },
];

return (
  <>
    <AppBackground />

    <div className="flex min-h-screen bg-[#050816] text-white">

      {/* Sidebar */}
     <aside
  className={`
    fixed lg:relative
    top-0 left-0
    h-screen
    z-50
    w-80
    bg-black/90
    backdrop-blur-2xl
    border-r border-cyan-500/10
    shadow-[0_0_50px_rgba(34,211,238,0.08)]
    flex flex-col
    transition-transform duration-300

    ${
      sidebarOpen
        ? "translate-x-0"
        : "-translate-x-full"
    }

    lg:translate-x-0
  `}
>
  <button
  onClick={() =>
    setSidebarOpen(false)
  }
  className="
    lg:hidden
    absolute
    top-4
    right-4
    text-white
    text-2xl
  "
>
  ×
</button>
        {/* Logo */}
        <div className="p-8 border-b border-white/5">

          <h1
            className="
              text-5xl
              font-black
              tracking-wider
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            AETHRA
          </h1>

          <p className="text-slate-400 mt-2 text-sm tracking-[0.3em] uppercase">
            Career Operating System
          </p>

        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto p-5">

          <nav className="space-y-3">

            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                    group
                    flex
                    items-center
                    px-5
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-cyan-500/20
                          to-purple-500/20
                          border
                          border-cyan-400/20
                          text-cyan-300
                          shadow-[0_0_25px_rgba(34,211,238,0.25)]
                        `
                        : `
                          text-slate-400
                          hover:text-white
                          hover:bg-white/5
                          hover:border
                          hover:border-cyan-400/10
                        `
                    }
                  `
                }
              >
                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            ))}

          </nav>

        </div>

        {/* User Card */}
        <div
          className="
            m-5
            p-5
            rounded-3xl
            bg-gradient-to-br
            from-cyan-500/10
            to-purple-500/10
            border
            border-white/10
          "
        >

          <p className="text-slate-400 text-xs uppercase tracking-widest">
            Powered By
          </p>

          <h3 className="font-bold text-cyan-300 mt-2">
            Aethra AI Engine
          </h3>

        </div>

      </aside>

      {/* Content */}
<main
  className="
    flex-1
    relative
    overflow-y-auto
    overflow-x-hidden
    bg-gradient-to-br
    from-[#050816]
    via-[#0B1120]
    to-[#111827]
  "
>

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full"></div>

       <TopNavbar
  toggleSidebar={() =>
    setSidebarOpen(!sidebarOpen)
  }
/>

       <div className="relative z-10 w-full max-w-full px-4 md:px-6 lg:px-8 py-6 overflow-x-hidden">
          {children}
        </div>

      </main>

    </div>
  </>
);
};

export default DashboardLayout;
