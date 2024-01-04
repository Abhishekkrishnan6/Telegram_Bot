import axios from 'axios';
import fs from 'fs';
import path from 'path';

const users = [];

export const getBotApiKey = (req, res) => {

  res.send(process.env.BOT_TOKEN);
};

export const updateBotApiKey = (req, res) => {
  const { apiKey } = req.body;

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
    const response = await axios.get('your_user_api_endpoint');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
};



export const blockUser = (req, res) => {
  const { id } = req.params;
  console.log('Blocking user with ID:', id);

  const user = users.filter(user => user._id !== Number(userId));


  if (user) {
    user.blocked = true;

    res.send(`User with ID ${id} blocked successfully!`);
  } else {
    res.status(404).send('User not found');
  }




  
};




export const unblockUser = (req, res) => {
  const { id } = req.params;
  console.log('Unblocking user with ID:', id);

  const user = users.filter(user => user._id !== Number(userId));


  if (user) {
    user.blocked = false;

    res.send(`User with ID ${id} unblocked successfully!`);
  } else {
    res.status(404).send('User not found');
  }
};
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(user => user._id.toString() === id.toString());

  if (index !== -1) {
    users.splice(index, 1);
    res.send(`User with ID ${id} deleted successfully!`);
  } else {
    res.status(404).send('User not found');
  }
};
