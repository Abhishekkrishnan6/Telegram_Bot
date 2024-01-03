// src/components/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotSettings from './components/BotSettings';
import UserManagement from './components/UserManagement';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/bot-settings">Bot Settings</Link>
            </li>
            <li>
              <Link to="/user-management">User Management</Link>
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

export default App;
