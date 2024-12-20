import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "vira@gmail.com",
    password: "viranti123",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (!user) {
      setError("Email atau password salah!");
      return;
    }

    // Arahkan ke halaman Dashboard setelah login berhasil
    navigate("/dashboard"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Tombol ke Halaman Utama */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")} // Kembali ke halaman utama aplikasi
            className="text-blue-500 hover:underline"
          >
            Kembali ke Halaman Utama
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 text-center text-white w-full">
        <p>Aplikasi Manajemen Sekolah</p>
      </div>
    </div>
  );
};

export default Login;
