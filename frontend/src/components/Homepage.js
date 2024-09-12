import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Homepage.css'; // Asegúrate de crear este archivo CSS para estilizar tu componente

function Homepage() {
  const { userId } = useParams(); // Obtener el user_id de los parámetros de la URL

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome! {userId}</h1>
      </header>
      <div className="sidebar">
        <ul>
          <li><Link to="/homepage">Homepage</Link></li>
          <li><Link to="/myfiles">My Files</Link></li>
          <li><Link to="/trashbin">Trash Bin</Link></li>
        </ul>
      </div>
      <div className="content">
        <h2>Proyecto: File Manager App</h2>
        <p>Descripción del Proyecto: El File Manager es una aplicación web diseñada para facilitar la gestión y organización de archivos de los usuarios. Permite a los usuarios subir, eliminar y buscar archivos de manera eficiente y segura. Además, incluye características avanzadas como la protección contra archivos no permitidos.</p>
      </div>
    </div>
  );
}

export default Homepage;
