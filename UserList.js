import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import api from '../../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status ? 'Active' : 'Inactive'}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserForm />
    </div>
  );
};

export default UserList;
