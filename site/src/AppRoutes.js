import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import './App.css';

const AppRoutes = () => {
  return (
    <Router>
      
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/mydashboard" element={<Dashboard />} /> {/* Nova rota */}
            <Route path="/support" element={<Support />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </main>
     
    </Router>
  );
};

const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <>
      <AppRoutes />
      <AuthRoutes />
    </>
  );
};

export default App;
