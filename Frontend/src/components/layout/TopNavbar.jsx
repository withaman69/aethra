import { useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  LogOut,
  Sparkles,
  Menu,
} from "lucide-react";

const TopNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header
      className="
      sticky top-0 z-50
      backdrop-blur-2xl
      bg-black/20
      border-b border-cyan-500/10
      px-4 md:px-6 lg:px-8 py-4
      flex items-center justify-between
    "
    >
     {/* LEFT */}
<div className="flex items-center gap-4">

  <button
    onClick={toggleSidebar}
    className="
      lg:hidden
      w-11 h-11
      rounded-2xl
      bg-white/5
      border border-white/10
      flex items-center justify-center
    "
  >
    <Menu size={20} />
  </button>

  <div>
        <h2
          className="
          text-xl md:text-2xl lg:text-3xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-purple-500
          bg-clip-text
          text-transparent
        "
        >
          Welcome Back 👋
        </h2>

        <p className="text-slate-400 mt-1">
          Your AI Career Command Center
        </p>
      </div>
    </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* AI Status */}
        <div
          className="
          hidden lg:flex
          items-center
          gap-2
          px-4 py-2
          rounded-2xl
          bg-cyan-500/10
          border border-cyan-500/20
        "
        >
          <Sparkles
            size={16}
            className="text-cyan-400"
          />

          <span className="text-cyan-300 text-sm">
            AI Active
          </span>
        </div>

        {/* Search */}
        <button
          className="
          w-11 h-11
          rounded-2xl
          bg-white/5
          border border-white/10
          flex items-center justify-center
          hover:border-cyan-400/50
          hover:text-cyan-400
          transition-all
        "
        >
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button
          className="
          relative
          w-11 h-11
          rounded-2xl
          bg-white/5
          border border-white/10
          flex items-center justify-center
          hover:border-cyan-400/50
          hover:text-cyan-400
          transition-all
        "
        >
          <Bell size={18} />

          <span
            className="
            absolute
            top-2
            right-2
            w-2 h-2
            bg-cyan-400
            rounded-full
            animate-ping
          "
          />
        </button>

        {/* User Card */}
        <div
          className="
          flex items-center gap-3
          px-4 py-2
          rounded-2xl
          bg-white/5
          border border-white/10
        "
        >
          <div
            className="
            w-11 h-11
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            flex items-center justify-center
            font-bold
            text-white
          "
          >
            {user?.name
              ? user.name
                  .charAt(0)
                  .toUpperCase()
              : "A"}
          </div>

          <div>
            <p className="font-semibold text-white">
              {user?.name || "Aman"}
            </p>

            <p className="text-xs text-slate-400">
              Career Builder
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
          w-11 h-11
          rounded-2xl
          bg-red-500/10
          border border-red-500/20
          text-red-400
          flex items-center justify-center
          hover:bg-red-500/20
          transition-all
        "
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;