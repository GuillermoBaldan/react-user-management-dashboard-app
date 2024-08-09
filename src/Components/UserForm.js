// UserForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ onAddUser }) => {
  console.log('onAddUser:', onAddUser); 
  const [user, setUser] = useState({ name: '', email: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      onAddUser(newUser);  // Llama a la función pasada como prop
      navigate('/');  // Navega de vuelta a la lista de usuarios
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
