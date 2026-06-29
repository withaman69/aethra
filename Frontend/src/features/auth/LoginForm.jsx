import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authApi";

const LoginForm = () => {
const navigate = useNavigate();

const {
register,
handleSubmit,
reset,
} = useForm();

const onSubmit = async (data) => {
try {
const result =
await loginUser(data);


  localStorage.setItem(
    "token",
    result.token
  );

  navigate("/dashboard");

  reset();
} catch (error) {
  console.error(error);

  alert(
    error?.response?.data
      ?.message ||
      "Login Failed"
  );
}


};

return (
<form
onSubmit={handleSubmit(
onSubmit
)}
className="space-y-5"
>
<input
type="email"
placeholder="Email Address"
{...register("email")}
className="
w-full
bg-white/5
border
border-white/10
rounded-2xl
p-4
text-white
placeholder:text-slate-500
focus:border-cyan-400
focus:outline-none
"
/>

  <input
    type="password"
    placeholder="Password"
    {...register(
      "password"
    )}
    className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      placeholder:text-slate-500
      focus:border-cyan-400
      focus:outline-none
    "
  />

  <div className="flex justify-end">
    <Link
      to="/forgot-password"
      className="
        text-sm
        text-cyan-400
        hover:text-cyan-300
        transition
      "
    >
      Forgot Password?
    </Link>
  </div>

  <button
    type="submit"
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
    Login
  </button>

  <p className="text-center text-slate-400 mt-6">
    Don't have an account?{" "}
    <Link
      to="/register"
      className="
        text-cyan-400
        hover:text-cyan-300
      "
    >
      Register
    </Link>
  </p>
</form>


);
};

export default LoginForm;
