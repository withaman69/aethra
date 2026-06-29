const AppBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />

      <div className="absolute inset-0 bg-[#0A0A0F]" />

    </div>
  );
};

export default AppBackground;