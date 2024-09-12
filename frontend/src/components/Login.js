import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Auth.css'; // Importar el archivo CSS compartido

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post('https://final-project-end-2.onrender.com/login', user);
      alert(`${response.data.message} Your ID is ${response.data.user_id}`);
      setError(''); // Limpiar el mensaje de error si el login es exitoso
    } catch (error) {
      setError('Email o contraseña incorrectos'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="hero-section">
          <div className="logo-container">
            <svg className="logo" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%">
                  <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#34D399", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%">
                  <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#60A5FA", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50,80 L250,80 L250,250 L50,250 Z" fill="url(#folderGradient)" />
              <path d="M50,80 L130,80 L150,50 L250,50 L250,80" fill="url(#folderGradient)" />
              <path d="M150,100 Q200,150 150,200 Q100,150 150,100" fill="url(#leafGradient)" />
              <path d="M140,170 A30,30 0 1,1 170,140" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
              <path d="M170,200 A30,30 0 1,1 140,170" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
              <path d="M200,170 A30,30 0 1,1 170,200" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
              <polygon points="137,168 143,162 149,174" fill="#F59E0B" />
              <polygon points="172,203 166,197 178,191" fill="#F59E0B" />
              <polygon points="203,168 197,174 191,162" fill="#F59E0B" />
            </svg>
          </div>
          <h1>File Manager</h1>
          <p className="hero-text">
            Experience the future of cloud storage. Seamlessly manage your files with our eco-friendly, AI-powered platform designed for the modern digital age.
          </p>
          <div className="eco-badge glass">
            🌿 Zero Carbon • Smart Storage • Secure
          </div>
        </div>
        <div className="form-section">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn">LOGIN</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p className="switch-form">New to File Manager? <Link to="/register">Join us!</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
