// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
