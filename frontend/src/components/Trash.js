import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Homepage.css'; // Usar el mismo CSS que Homepage

function Trash() {
  const { userId, username } = useParams(); // Obtener el user_id y username de los parámetros de la URL
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Cargar archivos desde localStorage al montar el componente
    const storedFiles = JSON.parse(localStorage.getItem(`trash_${userId}`)) || [];
    setFiles(storedFiles);
  }, [userId]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderFiles = (files) => {
    return files.map((file, index) => (
      <div key={index} className="file-card">
        <div className="file-icon">{getFileIcon(file.type)}</div>
        <div className="file-name">{file.name}</div>
        <div className="file-info">Modified: {file.uploadDate}</div>
        <div className="file-actions">
          <span className="file-action recover-action" onClick={() => recoverFile(file)}>♻️ Recover</span>
          <span className="file-action delete-action" onClick={() => deleteFile(file)}>🗑️ Delete</span>
        </div>
      </div>
    ));
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return '📝'; // PDF
      case 'msword': return '📄'; // Word
      case 'vnd.ms-excel': return '📊'; // Excel
      case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': return '📊'; // Excel (xlsx)
      case 'jpeg': return '🖼️'; // JPEG
      case 'jpg': return '🖼️'; // JPG
      case 'png': return '🖼️'; // PNG
      case 'mp4': return '📽️'; // MP4
      case 'plain': return '📝'; // Text
      default: return '📄'; // Default icon
    }
  };

  const recoverFile = (file) => {
    const updatedTrashFiles = files.filter(f => f.name !== file.name);
    setFiles(updatedTrashFiles);
    localStorage.setItem(`trash_${userId}`, JSON.stringify(updatedTrashFiles)); // Actualizar localStorage de la papelera

    const storedFiles = JSON.parse(localStorage.getItem(`files_${userId}`)) || [];
    storedFiles.push(file);
    localStorage.setItem(`files_${userId}`, JSON.stringify(storedFiles)); // Mover archivo de vuelta a MyFiles
  };

  const deleteFile = (file) => {
    if (window.confirm(`Are you sure you want to permanently delete ${file.name}?`)) {
      const updatedFiles = files.filter(f => f.name !== file.name);
      setFiles(updatedFiles);
      localStorage.setItem(`trash_${userId}`, JSON.stringify(updatedFiles)); // Actualizar localStorage de la papelera
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <svg className="logo" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%">
              <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#81C784', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%">
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
        <div className="nav-item" onClick={() => handleNavigation(`/homepage/${userId}/${username}`)}>Homepage</div>
        <div className="nav-item" onClick={() => handleNavigation(`/myfiles/${userId}/${username}`)}>My Files</div>
        <div className="nav-item active">Trash</div>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Trash - {username} (ID: {userId})</h1>
        </div>
        <div className="project-description">
          <h2>Archivos Eliminados</h2>
          {files.length === 0 ? (
            <p>No hay archivos en la papelera.</p>
          ) : null}
        </div>
        <div id="file-grid" className="file-grid">
          {renderFiles(files)}
        </div>
      </div>
    </div>
  );
}

export default Trash;
