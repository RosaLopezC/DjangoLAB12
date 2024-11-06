import React, { useEffect, useState } from 'react';
import { getLibros, deleteLibro } from '../services/libroService';
import { useNavigate } from 'react-router-dom';
import './LibroList.css';

const LibroList = () => {
  const [libros, setLibros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLibros();
  }, []);

  const fetchLibros = async () => {
    try {
      const response = await getLibros();
      setLibros(response.data);
    } catch (error) {
      console.error("Error al cargar los libros:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLibro(id);
      fetchLibros(); 
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/libros/${id}`);
  };

  const handleAdd = () => {
    navigate('/libros/nuevo');
  };

  return (
    <div className="libro-list">
      <h2>Lista de Libros</h2>
      <button className="add-button" onClick={handleAdd}>Agregar Libro</button>
      <table className="excel-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Editorial</th>
            <th>ISBN</th>
            <th>Número de Páginas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.editorial}</td>
              <td>{libro.isbn}</td>
              <td>{libro.num_pags}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(libro.id)}>Editar</button>
                <button className="delete-button" onClick={() => handleDelete(libro.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroList;
