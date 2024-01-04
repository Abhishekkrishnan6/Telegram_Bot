// src/components/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotSettings from './components/BotSettings';
import UserManagement from './components/UserManagement';

const App = () => {
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
