import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
