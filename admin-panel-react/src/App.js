import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotSettings from './components/BotSettings';
import UserManagement from './components/UserManagement';
import { GoogleLogin } from 'react-google-login';

const App = () => {
  const responseGoogle = (response) => {
    // Handle the Google login response
    console.log(response);
  };

  return (
    <Router>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <Link to="/bot-settings" style={linkStyle}>
                Bot Settings
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/user-management" style={linkStyle}>
                User Management
              </Link>
            </li>
          </ul>
          {/* Add Google login button */}
          <GoogleLogin
            clientId="605740529692-c5mrntg4g6prf3gjlph2b26t7meci1aq.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </nav>

        <Routes>
          <Route path="/bot-settings" element={<BotSettings />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

// Inline styles
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const navStyle = {
  background: '#333',
  padding: '10px',
};

const listStyle = {
  listStyle: 'none',
  margin: '0',
  padding: '0',
};

const listItemStyle = {
  display: 'inline-block',
  marginRight: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
};

export default App;
