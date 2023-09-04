import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import './App.css';

const App = () => {
  return (
    <Router>
       <div>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
            </Routes>
          </div>
     
          <main className="main-content">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/support" element={<Support />} />
              <Route path="/course" element={<Course />} />

            </Routes>
          </main>
       
    </Router>
  );
};

export default App;
