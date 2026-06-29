const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      shadow-[0_0_50px_rgba(34,211,238,0.08)]
      ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;