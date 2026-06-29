const AethraInput = (props) => {
  return (
    <input
      {...props}
      className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      px-4
      py-3
      text-white
      placeholder:text-slate-500
      focus:border-cyan-400
      focus:outline-none
      "
    />
  );
};

export default AethraInput;