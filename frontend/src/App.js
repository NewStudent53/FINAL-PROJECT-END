import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage'; // Asegúrate de importar el componente Homepage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage/:userId" element={<Homepage />} /> {/* Nueva ruta para Homepage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
