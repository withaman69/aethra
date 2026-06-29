import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../features/auth/authApi";
import { setCredentials } from "../../features/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

    const data = await loginUser(formData);

console.log("LOGIN RESPONSE:", data);
console.log("TOKEN:", data.token);

      localStorage.setItem(
        "token",
        data.token
      );

      console.log(
  "STORED TOKEN:",
  localStorage.getItem("token")
);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      dispatch(
        setCredentials({
          token: data.token,
          user: data.user,
        })
      );

      navigate("/dashboard");
  } catch (err) {
  console.log("LOGIN ERROR:", err);
  console.log("RESPONSE:", err?.response);
  console.log("DATA:", err?.response?.data);

  setError(
    err?.response?.data?.message ||
    err?.message ||
    "Login failed"
  );
} finally {
  setLoading(false);
}
  };

 return (
  <div className="min-h-screen flex items-center justify-center px-6 bg-transparent">
    <div
      className="
      w-full
      max-w-md
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-[0_0_40px_rgba(6,182,212,0.15)]
    "
    >
      <div className="text-center mb-8">
        <h1
          className="
          text-5xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-blue-400
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

      {error && (
        <div
          className="
          mb-6
          bg-red-500/10
          border
          border-red-500/30
          text-red-400
          rounded-2xl
          p-4
        "
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-4
              py-4
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-cyan-400
              transition-all
            "
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-4
              py-4
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-purple-400
              transition-all
            "
          />

          <div className="flex justify-end mt-2">
            <a
              href="/forgot-password"
              className="
                text-cyan-400
                text-sm
                hover:text-cyan-300
                transition
              "
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-4
            rounded-2xl
            font-bold
            text-lg
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-[1.02]
            transition-all
            shadow-[0_0_25px_rgba(6,182,212,0.4)]
          "
        >
          {loading
            ? "Logging In..."
            : "Access Aethra"}
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-slate-400">
          Don't have an account?
        </p>

        <a
          href="/register"
          className="
            text-cyan-400
            hover:text-cyan-300
            font-semibold
            block
            mt-2
          "
        >
          Create Account
        </a>
      </div>

      <div className="text-center mt-6">
        <p className="text-slate-400">
          Build your future with AI
        </p>
      </div>
    </div>
  </div>
);
};

export default LoginForm;