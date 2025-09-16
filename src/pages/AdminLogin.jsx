import React, { useState } from "react";

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5002/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save token to localStorage
      localStorage.setItem("adminToken", data.token);

      // Redirect or callback
      if (onLoginSuccess) onLoginSuccess();
      else window.location.href = "/admin/services";
    } catch {
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Admin Login
        </h1>
        {error && (
          <p className="bg-red-100 text-red-600 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
