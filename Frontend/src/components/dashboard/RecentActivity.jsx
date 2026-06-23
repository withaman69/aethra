const RecentActivity = () => {
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
        Recent Activity
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>
          Resume uploaded
        </li>

        <li>
          Career roadmap generated
        </li>

        <li>
          Mock interview completed
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;