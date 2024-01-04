// adminController.js

import axios from 'axios';

import fs from 'fs';
import path from 'path';

export const getBotApiKey = (req, res) => {
  // Retrieve and send the bot API key
  res.send(process.env.BOT_TOKEN);
};

export const updateBotApiKey = (req, res) => {
  const { apiKey } = req.body;

  // Validate the API key, you might want to perform additional checks here

  // Update the bot API key in the .env file
  try {
    const envFilePath = path.resolve(__dirname, '..', '..', '.env');
    fs.writeFileSync(envFilePath, `BOT_TOKEN=${apiKey}\n`, { flag: 'a' });
    res.send('Bot API key updated successfully!');
  } catch (error) {
    console.error('Error updating bot API key:', error);
    res.status(500).send('Internal Server Error');
  }
};


export const getUsers = async (req, res) => {
  try {
    // Make a request to get user accounts from your database
    const response = await axios.get('your_user_api_endpoint');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const blockUser = (req, res) => {
  const { id } = req.params;
  // Implement logic to block the user in your database
  res.send(`User with ID ${id} blocked successfully!`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // Implement logic to delete the user in your database
  res.send(`User with ID ${id} deleted successfully!`);
};
