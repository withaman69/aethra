const AethraButton = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="
      px-6
      py-3
      rounded-2xl
      font-bold
      bg-gradient-to-r
      from-cyan-500
      to-purple-500
      hover:scale-105
      transition-all
      "
    >
      {children}
    </button>
  );
};

export default AethraButton;