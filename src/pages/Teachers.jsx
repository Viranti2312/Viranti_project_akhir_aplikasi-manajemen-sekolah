import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '', nip: '' });
  const [editingTeacher, setEditingTeacher] = useState(null); // State untuk guru yang sedang diedit
  const navigate = useNavigate();

  // Fungsi untuk mengambil data guru dari localStorage
  useEffect(() => {
    const savedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(savedTeachers); 
  }, []);

  // Fungsi untuk menambah atau mengedit guru
  const saveTeacher = () => {
    if (newTeacher.name && newTeacher.subject && newTeacher.nip) {
      let updatedTeachers;
      if (editingTeacher) {
        // Update data guru yang sedang diedit
        updatedTeachers = teachers.map((teacher) =>
          teacher.id === editingTeacher.id ? { ...editingTeacher, ...newTeacher } : teacher
        );
        setEditingTeacher(null); // Reset edit state
      } else {
        // Tambah data guru baru
        updatedTeachers = [...teachers, { ...newTeacher, id: Date.now() }];
      }

      setTeachers(updatedTeachers);
      localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
      setNewTeacher({ name: '', subject: '', nip: '' }); // Reset form setelah tambah atau edit data
    } else {
      alert('Semua field harus diisi!');
    }
  };

  // Fungsi untuk menghapus guru
  const deleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
  };

  // Fungsi untuk memulai proses edit
  const startEditTeacher = (teacher) => {
    setNewTeacher({ name: teacher.name, subject: teacher.subject, nip: teacher.nip });
    setEditingTeacher(teacher); // Menyimpan guru yang sedang diedit
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-gray-300 to-blue-500 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Data Guru</h2>

      {/* Form untuk menambah atau mengedit guru */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 mx-auto max-w-4xl">
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Nama Guru"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Mata Pelajaran"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="NIP"
            value={newTeacher.nip}
            onChange={(e) => setNewTeacher({ ...newTeacher, nip: e.target.value })}
          />
          <button
            onClick={saveTeacher}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {editingTeacher ? 'Simpan Perubahan' : 'Tambah Guru'}
          </button>
        </div>
      </div>

      {/* Tabel data guru */}
      <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th className="border p-3">Nama Guru</th>
              <th className="border p-3">Mata Pelajaran</th>
              <th className="border p-3">NIP</th>
              <th className="border p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">Tidak ada data guru</td>
              </tr>
            ) : (
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="border p-3">{teacher.name}</td>
                  <td className="border p-3">{teacher.subject}</td>
                  <td className="border p-3">{teacher.nip}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => startEditTeacher(teacher)}
                      className="bg-yellow-500 text-white p-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTeacher(teacher.id)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tombol untuk kembali ke Dashboard */}
      <div
        className="absolute bottom-4 w-full flex justify-center items-center text-gray-600 text-lg font-medium cursor-pointer"
        onClick={() => navigate('/dashboard')}
      >
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Aplikasi Manajemen Sekolah
        </button>
      </div>
    </div>
  );
};

export default Teacher;
