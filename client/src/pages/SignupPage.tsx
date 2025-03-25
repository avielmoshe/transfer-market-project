import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/utils/api";
import { User } from "@/types/types";

const SignUp = () => {
  const [formData, setFormData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phone: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const { mutateAsync: addNewUserMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      setMessage({ type: "success", text: "User registered successfully!" });
      navigate("/login");
    },
    onError: (error) => {
      const errorMessage = error.message || "An error occurred.";
      setMessage({ type: "error", text: errorMessage });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => !field.trim())) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }
    if (!formData.password) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    if (formData.password.length < 6) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    try {
      await addNewUserMutation(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div
        className="shadow-lg rounded-lg p-8 text-black min-w-[400px] mt-5 mb-5"
        style={{
          background:
            "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
        }}
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mt-4 text-[rgb(92,166,255)]">
            Sign Up
          </h1>
        </div>
        {message.text && (
          <p
            className={`text-sm text-center mb-4 ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="phone"
              type="number"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[rgb(92,166,255)] hover:bg-white text-black py-2 px-4 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            Have an account?{" "}
            <span
              className="hover:underline cursor-pointer text-[rgb(92,166,255)]"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
