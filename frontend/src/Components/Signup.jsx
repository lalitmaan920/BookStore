import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate=useNavigate();
  const form = location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sigbup Successfully");
          navigate(form, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-[2px] shadow-md p-5 rounded-md border-info relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
            aria-label="Close"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          {/* Name Field */}
          <div className="mt-4 space-y-1">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-2 border rounded-md"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="mt-4 space-y-1">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 border rounded-md"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-1">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-2 border rounded-md"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6 gap-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-full px-4 py-2 hover:bg-blue-500 transition duration-200"
            >
              Signup
            </button>

            <div>
              <p className="text-sm">
                Have an account?
                <button
                  type="button"
                  className="underline text-blue-500 ml-1"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>

              {/* Render Login Modal */}
              <Login />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
