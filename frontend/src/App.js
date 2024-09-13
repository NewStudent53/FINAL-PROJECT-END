import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage'; // Asegúrate de importar el componente Homepage
import MyFiles from './components/MyFiles'; // Importar el componente MyFiles
import Trash from './components/Trash'; // Importar el componente Trash

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage/:userId/:username" element={<Homepage />} /> {/* Nueva ruta para Homepage */}
          <Route path="/myfiles/:userId/:username" element={<MyFiles />} /> {/* Nueva ruta para MyFiles */}
          <Route path="/trash/:userId/:username" element={<Trash />} /> {/* Nueva ruta para Trash */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;