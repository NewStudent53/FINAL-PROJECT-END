import React from 'react';
import { useParams } from 'react-router-dom';
import './Homepage.css'; // Usar el mismo CSS que Homepage

function MyFiles() {
  const { userId, username } = useParams(); // Obtener el user_id y username de los parámetros de la URL

  return (
    <div className="dashboard">
      <div className="sidebar">
        <svg className="logo" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#81C784', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2196F3', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#64B5F6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Folder shape */}
          <path d="M50,80 L250,80 L250,250 L50,250 Z" fill="url(#folderGradient)" />
          <path d="M50,80 L130,80 L150,50 L250,50 L250,80" fill="url(#folderGradient)" />

          {/* Leaf shape */}
          <path d="M150,100 Q200,150 150,200 Q100,150 150,100" fill="url(#leafGradient)" />

          {/* Recycling arrows */}
          <path d="M140,170 A30,30 0 1,1 170,140" fill="none" stroke="#FFC107" strokeWidth="10" strokeLinecap="round" />
          <path d="M170,200 A30,30 0 1,1 140,170" fill="none" stroke="#FFC107" strokeWidth="10" strokeLinecap="round" />
          <path d="M200,170 A30,30 0 1,1 170,200" fill="none" stroke="#FFC107" strokeWidth="10" strokeLinecap="round" />

          {/* Arrow tips */}
          <polygon points="137,168 143,162 149,174" fill="#FFC107" />
          <polygon points="172,203 166,197 178,191" fill="#FFC107" />
          <polygon points="203,168 197,174 191,162" fill="#FFC107" />
        </svg>
        <div className="nav-item" id="homepage">Homepage</div>
        <div className="nav-item active">My Files</div>
        <div className="nav-item" id="trash">Trash</div>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>My Files - {username} (ID: {userId})</h1>
        </div>
        <div className="project-description">
          <h2>Gestión de Archivos</h2>
          <p>Aquí puedes gestionar tus archivos.</p>
        </div>
      </div>
    </div>
  );
}

export default MyFiles;