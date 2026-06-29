import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#030712]
        relative
        overflow-hidden
        px-6
      "
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[180px] rounded-full"></div>

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="relative z-10">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;