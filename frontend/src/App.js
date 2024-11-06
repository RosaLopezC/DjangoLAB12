import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LibroList from './components/LibroList';
import LibroForm from './components/LibroForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/libros" element={<LibroList />} />
        <Route path="/libros/nuevo" element={<LibroForm />} />
        <Route path="/libros/:id" element={<LibroForm />} />
      </Routes>
    </Router>
  );
}

export default App;
