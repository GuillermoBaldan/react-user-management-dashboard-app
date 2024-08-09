// UserList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

    // Definición de handleDelete
    const handleDelete = (id) => {
        // Aquí puedes implementar la lógica para eliminar un usuario de la API.
        // Por ejemplo, podrías hacer una solicitud DELETE a la API y luego actualizar el estado.
        
        // Para esta demostración, eliminaremos el usuario localmente:
        setUsers(users.filter(user => user.id !== id));
      };
    

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/add" style={{ marginBottom: '20px', display: 'inline-block' }}>Add New User</Link>

      {/* Asegúrate de pasar handleAddUser al UserForm */}
      <UserForm onAddUser={handleAddUser} />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <Link to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
