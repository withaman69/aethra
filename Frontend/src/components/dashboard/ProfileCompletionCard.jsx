const ProfileCompletionCard = () => {
  const progress = 70;

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
      <h3 className="text-xl font-semibold text-white">
        Profile Completion
      </h3>

      <div className="mt-4">
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-3 text-gray-300">
          {progress}% Complete
        </p>
      </div>
    </div>
  );
};

export default ProfileCompletionCard;