const PrimaryButton = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="
      `bg-gradient-to-r`
      from-cyan-500
      to-purple-500
      px-5
      py-3
      rounded-xl
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;