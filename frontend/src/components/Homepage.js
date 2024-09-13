import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Homepage.css'; // Asegúrate de crear este archivo CSS para estilizar tu componente

function Homepage() {
  const { userId, username } = useParams(); // Obtener el user_id y username de los parámetros de la URL
  const navigate = useNavigate();

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
        <div className="nav-item active">Homepage</div>
        <div className="nav-item" id="myfiles" onClick={() => navigate(`/myfiles/${userId}/${username}`)}>My Files</div>
        <div className="nav-item" id="trash" onClick={() => navigate(`/trash/${userId}/${username}`)}>Trash</div>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Welcome {username}! ID: {userId}</h1>
        </div>
        <div className="project-description">
          <h2>Proyecto: File Manager App</h2>
          <p><strong>Descripción del Proyecto:</strong> El <em>File Manager</em> es una aplicación web diseñada para facilitar la gestión y organización de archivos de los usuarios. Permite a los usuarios subir, eliminar y buscar archivos de manera eficiente y segura. Además, incluye características avanzadas como la protección contra archivos no permitidos.</p>
          
          <h3>Características Principales</h3>
          <ul>
            <li><strong>Subida de Archivos:</strong> Los usuarios pueden subir archivos a su espacio personal en el servidor.</li>
            <li><strong>Eliminación de Archivos:</strong> Los usuarios pueden eliminar archivos, tanto del servidor como de la base de datos.</li>
            <li><strong>Búsqueda de Archivos:</strong> Los usuarios pueden buscar archivos por nombre, tipo, tamaño y fecha de modificación.</li>
            <li><strong>Protección de Seguridad:</strong> Se implementan medidas para evitar la subida de archivos peligrosos (como `.exe`) y proteger contra inyecciones SQL.</li>
            <li><strong>Mensajes de Confirmación:</strong> El sistema muestra mensajes de éxito o error al realizar acciones como subir, eliminar o modificar archivos.</li>
          </ul>
          
          <h3>Seguridad y Validaciones</h3>
          <ul>
            <li><strong>Validación de Archivos:</strong> Se verifica que los archivos subidos no sean de tipo `.exe`.</li>
            <li><strong>Mensajes de Confirmación:</strong> Se muestran mensajes claros al usuario sobre el éxito o fracaso de las operaciones realizadas.</li>
          </ul>
          
          <h3>Flujo de Trabajo</h3>
          <ol>
            <li><strong>Inicio de Sesión:</strong> El usuario inicia sesión en la aplicación.</li>
            <li><strong>Subida de Archivos:</strong> El usuario selecciona y sube archivos a su espacio personal.</li>
            <li><strong>Gestión de Archivos:</strong> El usuario puede buscar, descargar o eliminar archivos.</li>
            <li><strong>Mensajes de Confirmación:</strong> El sistema informa al usuario sobre el estado de las operaciones.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Homepage;