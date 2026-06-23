const QuickAction = () => {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      rounded-2xl
      p-6
      "
    >
      <h3 className="text-xl font-semibold text-white mb-4">
        Quick Actions
      </h3>

      <div className="flex flex-col gap-3">
        <button className="p-3 rounded-lg bg-blue-600 text-white">
          Upload Resume
        </button>

        <button className="p-3 rounded-lg bg-green-600 text-white">
          Generate Roadmap
        </button>

        <button className="p-3 rounded-lg bg-purple-600 text-white">
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default QuickAction;