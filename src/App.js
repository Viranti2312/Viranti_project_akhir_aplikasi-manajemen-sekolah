import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard"; // Pastikan file Dashboard sudah ada
import Students from "./pages/Students"; // Contoh halaman lainnya
import Teachers from "./pages/Teachers"; // Contoh halaman lainnya
import Classes from "./pages/Classes"; // Contoh halaman lainnya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/Classes" element={<Classes />} />
      </Routes>
    </Router>
  );
};

export default App;
