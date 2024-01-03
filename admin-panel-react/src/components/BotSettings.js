import React, { useState } from 'react';
import axios from 'axios';

const BotSettings = () => {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/update-bot-api-key', { apiKey });
      alert('Bot API key updated successfully!');
    } catch (error) {
      console.error('Error updating bot API key:', error);
    }
  };

  return (
    <div>
      <h2>Edit Bot API Key</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Bot API Key:
          <input type="text" value={apiKey} onChange={handleApiKeyChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BotSettings;
