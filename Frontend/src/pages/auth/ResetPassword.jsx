import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../features/auth/authApi";

const ResetPassword = () => {
const { token } = useParams();

const navigate = useNavigate();

const [password, setPassword] =
useState("");

const [confirmPassword,
setConfirmPassword] =
useState("");

const [loading, setLoading] =
useState(false);

const [message, setMessage] =
useState("");

const handleSubmit = async (e) => {
e.preventDefault();


if (
  password !== confirmPassword
) {
  return setMessage(
    "Passwords do not match"
  );
}

try {
  setLoading(true);

  await resetPassword(
    token,
    password
  );

  setMessage(
    "Password reset successful"
  );

  setTimeout(() => {
    navigate("/login");
  }, 2000);
} catch (error) {
  setMessage(
    error?.response?.data?.message ||
      "Reset failed"
  );
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-[#030712]"> <form
     onSubmit={handleSubmit}
     className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl"
   > <h1 className="text-3xl font-bold text-white mb-6">
Reset Password </h1>


    <input
      type="password"
      placeholder="New Password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4"
    />

    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) =>
        setConfirmPassword(
          e.target.value
        )
      }
      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
    >
      {loading
        ? "Resetting..."
        : "Reset Password"}
    </button>

    {message && (
      <p className="mt-4 text-center text-slate-300">
        {message}
      </p>
    )}
  </form>
</div>


);
};

export default ResetPassword;
