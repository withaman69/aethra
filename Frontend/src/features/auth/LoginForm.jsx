import { useForm } from "react-hook-form";
import { loginUser } from "../../features/auth/authApi";

const LoginForm = () => {
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

      alert(
        "Login Successful"
      );

      console.log(result);

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
    >
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        {...register(
          "password"
        )}
      />

      <br />
      <br />

      <button
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;