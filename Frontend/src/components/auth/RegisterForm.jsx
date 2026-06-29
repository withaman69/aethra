import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authApi";

const RegisterForm = () => {
const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

if (
  formData.password !==
  formData.confirmPassword
) {
  return setError(
    "Passwords do not match"
  );
}

try {
  setLoading(true);

  await registerUser({
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });

  navigate("/login");
} catch (err) {
  setError(
    err?.response?.data?.message ||
      "Registration Failed"
  );
} finally {
  setLoading(false);
}


};

return ( <div
   className="
   w-full
   max-w-md
   bg-white/5
   backdrop-blur-xl
   border
   border-white/10
   rounded-3xl
   p-8
   shadow-[0_0_40px_rgba(6,182,212,0.2)]
 "
 > <div className="text-center mb-8"> <h1
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
AETHRA </h1>


    <p className="text-slate-400 mt-3">
      Create Your AI Career Journey
    </p>
  </div>

  {error && (
    <div
      className="
      bg-red-500/10
      border
      border-red-500/30
      rounded-xl
      p-3
      mb-5
      text-red-400
    "
    >
      {error}
    </div>
  )}

  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      focus:border-cyan-400
      focus:outline-none
    "
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      focus:border-cyan-400
      focus:outline-none
    "
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      focus:border-cyan-400
      focus:outline-none
    "
    />

    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
      className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      focus:border-cyan-400
      focus:outline-none
    "
    />

    <button
      type="submit"
      disabled={loading}
      className="
      w-full
      py-4
      rounded-2xl
      font-bold
      bg-gradient-to-r
      from-cyan-500
      to-purple-500
      hover:scale-[1.02]
      transition-all
      duration-300
    "
    >
      {loading
        ? "Creating Account..."
        : "Create Account"}
    </button>
  </form>

  <div className="text-center mt-6">
    <p className="text-slate-400">
      Already have an account?
    </p>

    <a
      href="/login"
      className="
        text-cyan-400
        hover:text-cyan-300
        font-semibold
        block
        mt-2
      "
    >
      Login
    </a>
  </div>
</div>


);
};

export default RegisterForm;
