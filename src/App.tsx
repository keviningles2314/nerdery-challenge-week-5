import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PostDetail from './pages/postDetail';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className='App'>
        <Home />
      </div>
    </Layout>
  );
}

export default App;
