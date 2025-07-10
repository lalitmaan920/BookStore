import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://bookstore-bivh.onrender.com/user/login", userInfo);

      if (res.data && res.data.user) {
        toast.success("Logged in successfully");

        // Save user to localStorage
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // Close modal
        document.getElementById("my_modal_3").close();

        // Reload after 1s
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-4">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border block rounded-md"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border block rounded-md"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            {/* Submit and Signup Link */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-full px-4 py-1 hover:bg-blue-500 duration-200"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered?
                <Link to="/signup" className="underline text-blue-500 ml-1">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
