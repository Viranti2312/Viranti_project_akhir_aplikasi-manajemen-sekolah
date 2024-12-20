import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logo.png'; // Impor logo dari folder src/assets

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-800 px-4 sm:px-6 md:px-8">
      {/* Background Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 opacity-60"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay untuk gelap */}

      {/* Konten Landing Page */}
      <div className="relative z-10 text-center text-white">
        {/* Logo di Tengah */}
        <div className="mb-6 flex justify-center items-center">
          <img
            src={Logo} // Menggunakan import sebagai sumber gambar
            alt="Logo Sekolah"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Judul */}
        <h1 className="text-3xl font-bold mb-4">
          Selamat Datang di Aplikasi Manajemen Sekolah
        </h1>
        <p className="mb-6">
          Aplikasi ini membantu mengelola data siswa, guru, dan kelas dengan mudah dan efisien.
        </p>

        {/* Tombol Navigasi */}
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Register
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-white w-full">
        <p>Aplikasi Manajemen Sekolah</p>
      </div>
    </div>
  );
};

export default LandingPage;
