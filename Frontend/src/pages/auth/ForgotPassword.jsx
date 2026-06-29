import { useState } from "react";
import { forgotPassword } from "../../features/auth/authApi";

const ForgotPassword = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();


try {
  setLoading(true);

  const res = await forgotPassword({
    email,
  });

  setMessage(
    res.message || "Reset email sent successfully"
  );
} catch (error) {
  setMessage(
    error?.response?.data?.message ||
      "Something went wrong"
  );
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-[#030712]"> <form
     onSubmit={handleSubmit}
     className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl"
   > <h1 className="text-3xl font-bold text-white mb-6">
Forgot Password </h1>

    <input
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
    >
      {loading
        ? "Sending..."
        : "Send Reset Link"}
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

export default ForgotPassword;
