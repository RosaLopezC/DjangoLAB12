import React, { useState, useEffect } from 'react';
import { createLibro, updateLibro, getLibros } from '../services/libroService';
import { useNavigate, useParams } from 'react-router-dom';
import './LibroForm.css';

const LibroForm = () => {
  const [titulo, setTitulo] = useState('');
  const [editorial, setEditorial] = useState('');
  const [isbn, setIsbn] = useState('');
  const [numPags, setNumPags] = useState('');
  const [codigo, setCodigo] = useState('');
  const [autor, setAutor] = useState(1); 
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchLibro();
    }
  }, [id]);

  const fetchLibro = async () => {
    try {
      const response = await getLibros();
      const libro = response.data.find((l) => l.id === parseInt(id));
      if (libro) {
        setTitulo(libro.titulo);
        setEditorial(libro.editorial);
        setIsbn(libro.isbn);
        setNumPags(libro.num_pags);
        setCodigo(libro.codigo);
        setAutor(libro.autor);
      }
    } catch (error) {
      console.error("Error al cargar el libro:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const libroData = { 
      codigo,
      titulo,
      editorial,
      isbn,
      num_pags: numPags,
      autor  
    };

    try {
      if (id) {
        await updateLibro(id, libroData);
      } else {
        await createLibro(libroData);
      }
      navigate('/libros');
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? "Editar Libro" : "Agregar Libro"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Código:</label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Editorial:</label>
          <input
            type="text"
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>ISBN:</label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Número de Páginas:</label>
          <input
            type="number"
            value={numPags}
            onChange={(e) => setNumPags(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Autor:</label>
          <input
            type="number" 
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default LibroForm;
