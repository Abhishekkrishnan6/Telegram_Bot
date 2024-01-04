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
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleBlockUser = async (userId) => {
    try {
      // Make a request to block the user
      await axios.put(`http://localhost:3000/block-user/${userId}`);
      alert('User blocked successfully!');
      fetchUsers();
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      // Make a request to unblock the user
      await axios.put(`http://localhost:3000/unblock-user/${userId}`);
      alert('User unblocked successfully!');
      fetchUsers();
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  const handleUnsubscribeAndDelete = async (userId) => {
    try {
      // Unsubscribe the user first
      await axios.post(`http://localhost:3000/unsubscribe`, { chatId: userId });
      fetchUsers();
      alert('User unsubscribed successfully!');

      // Delete the user
    //   await axios.delete(`http://localhost:3000/${userId}`);
    //   alert('User deleted successfully!');

      // Refresh user list
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.city}
            <button onClick={() => handleBlockUser(user._id)}>Block</button>
            <button onClick={() => handleUnblockUser(user._id)}>Unblock</button>
            <button onClick={() => handleUnsubscribeAndDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
