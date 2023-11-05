import { Link } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://example.com/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess(true);
        console.log("Login successful!");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred during login.");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-login-image">
        <div className="bg-gray-100 bg-opacity-90 py-8 min-h-screen flex min-w-full">
          <div className="max-w-xl w-full mx-auto border bg-white rounded-md mt-20 shadow-md">
            {error && (
              <div className="bg-red-100 text-red-600 py-2 px-4 mb-4 text-center font-bold rounded-md">
                Invalid credentials
              </div>
            )}
            {sucess && (
              <div className="bg-green-100 border border-green-200 text-green-600 py-2 px-4 mb-4 text-center font-bold rounded-md">
                Login successful!
              </div>
            )}

            <form
              onSubmit={handleLogin}
              className="bg-white rounded-md p-8 my-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  login
                </button>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Don't have an account?
                <Link to="/register" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
