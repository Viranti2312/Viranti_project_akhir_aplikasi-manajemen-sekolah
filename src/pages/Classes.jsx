import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({ name: '', level: '', teacher: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const savedClasses = JSON.parse(localStorage.getItem('classes')) || [];
    setClasses(savedClasses);
  }, []);

  const addClass = () => {
    if (newClass.name && newClass.level && newClass.teacher) {
      const updatedClasses = [...classes, { ...newClass, id: Date.now() }];
      setClasses(updatedClasses);
      localStorage.setItem('classes', JSON.stringify(updatedClasses));
      setNewClass({ name: '', level: '', teacher: '' });
    } else {
      alert('Semua field harus diisi!');
    }
  };

  const deleteClass = (id) => {
    const updatedClasses = classes.filter((classItem) => classItem.id !== id);
    setClasses(updatedClasses);
    localStorage.setItem('classes', JSON.stringify(updatedClasses));
  };

  const editClass = (classItem) => {
    const updatedName = prompt('Masukkan nama kelas:', classItem.name);
    const updatedLevel = prompt('Masukkan tingkat kelas:', classItem.level);
    const updatedTeacher = prompt('Masukkan wali kelas:', classItem.teacher);

    if (updatedName && updatedLevel && updatedTeacher) {
      const updatedClasses = classes.map((item) =>
        item.id === classItem.id
          ? { ...item, name: updatedName, level: updatedLevel, teacher: updatedTeacher }
          : item
      );
      setClasses(updatedClasses);
      localStorage.setItem('classes', JSON.stringify(updatedClasses));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-gray-300 to-blue-500 p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Data Kelas</h2>

        {/* Form untuk menambah kelas */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 mx-auto max-w-4xl">
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Nama Kelas"
              value={newClass.name}
              onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Tingkat"
              value={newClass.level}
              onChange={(e) => setNewClass({ ...newClass, level: e.target.value })}
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Wali Kelas"
              value={newClass.teacher}
              onChange={(e) => setNewClass({ ...newClass, teacher: e.target.value })}
            />
            <button onClick={addClass} className="bg-blue-500 text-white p-2 rounded">
              Tambah Kelas
            </button>
          </div>
        </div>

        {/* Tabel data kelas */}
        <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl">
          <div className="overflow-y-auto max-h-96">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3">Nama</th>
                  <th className="border p-3">Tingkat</th>
                  <th className="border p-3">Wali Kelas</th>
                  <th className="border p-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {classes.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center p-4">
                      Tidak ada data kelas
                    </td>
                  </tr>
                ) : (
                  classes.map((classItem) => (
                    <tr key={classItem.id} className="bg-white border-b">
                      <td className="border p-4 mb-2">{classItem.name}</td>
                      <td className="border p-4 mb-2">{classItem.level}</td>
                      <td className="border p-4 mb-2">{classItem.teacher}</td>
                      <td className="border p-4 mb-2">
                        <button
                          onClick={() => editClass(classItem)}
                          className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteClass(classItem.id)}
                          className="bg-red-500 text-white py-1 px-2 rounded"
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
        </div>
      </div>

      {/* Tombol kembali */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Aplikasi Manajemen Sekolah
        </button>
      </div>
    </div>
  );
};

export default Classes;
