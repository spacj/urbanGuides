import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Tours from './pages/Tours';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
