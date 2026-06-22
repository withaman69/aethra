import { useForm } from "react-hook-form";
import { registerUser } from "../../features/auth/authApi";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result =
        await registerUser(
          data
        );

      console.log(result);

      alert(
        "Registration Successful"
      );

      reset();
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required:
              "Name is required",
          })}
        />
      </div>

      <br />

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required:
              "Email is required",
          })}
        />
      </div>

      <br />

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register(
            "password",
            {
              required:
                "Password is required",
              minLength: 6,
            }
          )}
        />
      </div>

      <br />

      <button
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;