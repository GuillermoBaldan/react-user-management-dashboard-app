// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    // Implementar la lógica para eliminar un usuario usando una API real.
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      <Link to="/add" style={{ marginBottom: '20px', display: 'inline-block' }}>Add New User</Link>
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
