const CareerReadinessCard = () => {
  const score = 78;

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
        Career Readiness
      </h3>

      <p className="text-5xl font-bold text-green-400 mt-4">
        {score}%
      </p>

      <p className="text-gray-400 mt-2">
        Based on profile,
        experience and skills.
      </p>
    </div>
  );
};

export default CareerReadinessCard;