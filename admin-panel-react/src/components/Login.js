
import React from 'react';
import axios from 'axios';

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/auth/google');
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
