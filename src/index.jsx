import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./src/components/Register";
import Dashboard from "./pages/Dashboard"; // Pastikan file Dashboard sudah ada
import Students from "./pages/Students"; // Contoh halaman lainnya
import Teachers from "./pages/Teachers"; // Contoh halaman lainnya
import Classes from "./pages/Classes"; // Contoh halaman lainnya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-siswa" element={<Students />} />
        <Route path="/data-guru" element={<Teachers />} />
        <Route path="/data-kelas" element={<Classes />} />
      </Routes>
    </Router>
  );
};

export default App;
