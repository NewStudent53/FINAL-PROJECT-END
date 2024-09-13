import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Homepage.css'; // Usar el mismo CSS que Homepage

function MyFiles() {
  const { userId, username } = useParams(); // Obtener el user_id y username de los parámetros de la URL
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Cargar archivos desde localStorage al montar el componente
    const storedFiles = JSON.parse(localStorage.getItem(`files_${userId}`)) || [];
    setFiles(storedFiles);
  }, [userId]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFile = {
        name: file.name,
        type: file.type.split('/')[1],
        uploadDate: new Date().toLocaleString(),
        userId: userId,
        url: URL.createObjectURL(file) // Crear una URL para el archivo
      };
      const updatedFiles = [...files, newFile];
      setFiles(updatedFiles);
      localStorage.setItem(`files_${userId}`, JSON.stringify(updatedFiles)); // Guardar archivos en localStorage
    }
  };

  const renderFiles = (files) => {
    return files.map((file, index) => (
      <div key={index} className="file-card">
        <div className="file-icon">{getFileIcon(file.type)}</div>
        <div className="file-name">{file.name}</div>
        <div className="file-info">Modified: {file.uploadDate}</div>
        <div className="file-actions">
          <span className="file-action view-action" onClick={() => viewFile(file)}>👁️ View</span>
          <span className="file-action delete-action" onClick={() => deleteFile(file)}>🗑️ Delete</span>
          <span className="file-action download-action" onClick={() => downloadFile(file)}>⬇️ Download</span>
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

  const viewFile = (file) => {
    window.open(file.url, '_blank');
  };

  const deleteFile = (file) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      const updatedFiles = files.filter(f => f.name !== file.name);
      setFiles(updatedFiles);
      localStorage.setItem(`files_${userId}`, JSON.stringify(updatedFiles)); // Actualizar localStorage
    }
  };

  const downloadFile = (file) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div class="nav-item active">My Files</div>
        <div className="nav-item" onClick={() => handleNavigation(`/trash/${userId}/${username}`)}>Trash</div>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>My Files - {username} (ID: {userId})</h1>
        </div>
        <div className="project-description">
          <h2>Gestión de Archivos</h2>
          {files.length === 0 ? (
            <p>Aquí puedes gestionar tus archivos.</p>
          ) : null}
        </div>
        <div className="upload-section">
          <label htmlFor="file-upload" className="upload-button">
            <span>+</span> Subir Archivo
          </label>
          <input id="file-upload" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
        </div>
        <div id="file-grid" className="file-grid">
          {renderFiles(files)}
        </div>
      </div>
    </div>
  );
}

export default MyFiles;
