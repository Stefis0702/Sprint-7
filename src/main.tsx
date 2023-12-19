import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NavContextProvider from './api/ApiStartW.tsx';


createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <NavContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
    </NavContextProvider>
  </React.StrictMode>
)