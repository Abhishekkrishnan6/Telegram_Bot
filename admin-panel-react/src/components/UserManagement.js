
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
     
      const response = await axios.get('http://localhost:3000/');
      setUsers(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleBlockUser = async (userId) => {
    try {
     
      await axios.put(`http://localhost:3000/${userId}`);
      alert('User blocked successfully!');
  
      fetchUsers();
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
     
      await axios.delete(`http://localhost:3000/${userId}`);
      alert('User deleted successfully!');
   
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };
  
  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id}    {user.city}
            
            <button onClick={() => handleBlockUser(user._id)}>Block</button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
