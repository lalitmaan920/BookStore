import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

          <h1 className="font-bold text-lg mb-4">Contact Us</h1>

          {/* Name Field */}
          <div className="mt-4 space-y-1">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-2 border rounded-md"
              {...register("Name", { required: true })}
            />
            <br/>
            {errors.Name && (
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
            <br/>
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-1">
            <label className="block text-sm font-medium">Message</label>
            <input
              type="text"
              placeholder="Enter your text"
              className="w-80 h-20 px-3 py-2 border rounded-md"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6 gap-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-full px-4 py-2 hover:bg-blue-500 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
