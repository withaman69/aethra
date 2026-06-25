const Topbar = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">
        Welcome Back
      </h2>

      <div className="flex items-center gap-4">
        <span>
          Career Score: 85
        </span>
      </div>

    </div>
  );
};

export default Topbar;