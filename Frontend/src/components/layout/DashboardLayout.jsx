import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-slate-100">

        <Topbar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;