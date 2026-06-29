const AethraCard = ({
  title,
  children,
}) => {
  return (
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
      <h2 className="text-2xl font-bold text-cyan-300 mb-5">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default AethraCard;