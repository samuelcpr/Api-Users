import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
