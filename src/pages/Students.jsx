import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '', class: '' });
  const [editStudent, setEditStudent] = useState(null); // Untuk menyimpan data siswa yang sedang diedit
  const navigate = useNavigate();

  // Mengambil data siswa yang ada di localStorage saat pertama kali aplikasi dimuat
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedStudents);
  }, []);

  // Fungsi untuk menambah siswa
  const addStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.class) {
      const updatedStudents = [...students, { ...newStudent, id: Date.now() }];
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      setNewStudent({ name: '', age: '', class: '' }); // Reset form
    }
  };

  // Fungsi untuk menghapus siswa
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents)); // Update localStorage setelah penghapusan
  };

  // Fungsi untuk mengedit siswa
  const editStudentData = (student) => {
    setEditStudent(student); // Set data siswa yang akan diedit
    setNewStudent({ name: student.name, age: student.age, class: student.class }); // Isi form dengan data siswa yang dipilih
  };

  // Fungsi untuk memperbarui data siswa
  const updateStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.class) {
      const updatedStudents = students.map((student) =>
        student.id === editStudent.id ? { ...newStudent, id: student.id } : student
      );
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      setEditStudent(null); // Reset status edit
      setNewStudent({ name: '', age: '', class: '' }); // Reset form
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-between">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 text-center text-gray-800 max-w-4xl mx-auto flex-grow">
        <h2 className="text-2xl font-bold mb-6">Data Siswa</h2>

        {/* Form untuk menambah atau mengedit siswa */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nama"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="p-2 border mr-2"
          />
          <input
            type="number"
            placeholder="Usia"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            className="p-2 border mr-2"
          />
          <input
            type="text"
            placeholder="Kelas"
            value={newStudent.class}
            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
            className="p-2 border"
          />
          <button
            onClick={editStudent ? updateStudent : addStudent}
            className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
          >
            {editStudent ? 'Perbarui Siswa' : 'Tambah Siswa'}
          </button>
        </div>

        {/* Tabel Data Siswa */}
        <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Usia</th>
                <th className="border p-2">Kelas</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.age}</td>
                  <td className="border p-2">{student.class}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => editStudentData(student)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Teks Aplikasi Manajemen Sekolah yang dapat diklik untuk kembali ke Dashboard */}
      <div
        className="absolute bottom-4 left-0 right-0 flex justify-center items-center text-gray-600 text-lg font-medium cursor-pointer z-20"
        onClick={() => navigate('/dashboard')}
      >
        <p>Aplikasi Manajemen Sekolah</p>
      </div>
    </div>
  );
};

export default Students;
