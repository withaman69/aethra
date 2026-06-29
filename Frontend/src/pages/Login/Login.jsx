import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
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

      <div
        className="
        relative
        z-10
        w-full
        max-w-md
        p-8
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(6,182,212,0.15)]
      "
      >
        <div className="text-center mb-8">
          <h1
            className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            AETHRA
          </h1>

          <p className="text-slate-400 mt-3">
            AI Career Growth Platform
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;