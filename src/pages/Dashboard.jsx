import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative p-8 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen">
      {/* Overlay untuk memberikan kontras */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Konten Dashboard */}
      <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Selamat Datang di Aplikasi Manajemen Sekolah
        </h1>

        {/* Deskripsi */}
        <p className="text-lg text-gray-700 mb-10 mx-4 md:mx-0">
          Aplikasi ini dirancang untuk mendukung pengelolaan data sekolah secara efisien dan terorganisir. Dengan fitur yang lengkap, pengguna dapat dengan mudah mengelola informasi data siswa, guru, dan kelas.
        </p>

        {/* Tombol Aksi dengan layout grid dan margin konsisten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <button
            onClick={() => navigate('/students')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md w-full text-center transition duration-300"
          >
            Kelola Data Siswa
          </button>

          <button
            onClick={() => navigate('/teachers')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md w-full text-center transition duration-300"
          >
            Kelola Data Guru
          </button>

          <button
            onClick={() => navigate('/classes')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md w-full text-center transition duration-300"
          >
            Kelola Data Kelas
          </button>
        </div>

        {/* Tombol Kembali ke halaman Login */}
        <div className="flex justify-center mt-6 mb-6">
          <button
            onClick={() => navigate('/login')}  // Arahkan ke halaman login
            className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md w-40 text-center transition duration-300"
          >
            Kembali
          </button>
        </div>
      </div>

      {/* Teks "Aplikasi Manajemen Sekolah" di bagian bawah */}
      <div className="absolute bottom-4 w-full flex justify-center items-center text-gray-600 text-lg font-medium">
        <p>Aplikasi Manajemen Sekolah</p>
      </div>
    </div>
  );
};

export default Dashboard;
