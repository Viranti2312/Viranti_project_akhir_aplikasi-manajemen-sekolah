import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validasi password
    if (formData.password !== formData.confirmPassword) {
      setError("Password tidak cocok!");
      return;
    }

    // Simpan data pengguna ke localStorage
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil!");
    navigate("/login"); // Arahkan ke halaman login setelah pendaftaran
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Tombol Kembali */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/login")} // Kembali ke halaman login
            className="text-blue-500 hover:underline"
          >
            Kembali ke Login
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 text-center text-white w-full">
        <p>Aplikasi Manajemen Sekolah</p>
      </div>
    </div>
  );
};

export default Register;
