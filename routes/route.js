import express from "express";

// Import your controller functions
import {
  subscribe,
  unSubscribe,
  updateCity,
  getData,
  getOneSubscriber
} from '../controller/subscriptionController.js';

import {
  getBotApiKey,
  updateBotApiKey,
  getUsers,
  blockUser,
  unblockUser,
  deleteUser
} from "../controller/adminController.js";

const router = express.Router();

// Assume you have a users array declared globally
const users = [];

router.get('/', async (req, res) => {
  res.send(await getData());
});

router.get('/:id', async (req, res) => {
  const chatId = req.params.id;
  res.send(await getOneSubscriber(chatId));
});

router.post('/subscribe', async (req, res) => {
  const chatId = req.body.chatId;
  const location = req.body.location;

  // Check for valid chatId
  if (chatId > 0) {
    res.send(await subscribe(chatId, location));
  } else {
    res.send("Invalid Id, user not inserted");
  }
});

router.post('/unsubscribe', async (req, res) => {
  const chatId = req.body.chatId;
  res.send(await unSubscribe(chatId));
});

router.put('/:id', async (req, res) => {
  const chatId = req.body.chatId;
  const location = req.body.location;
  res.send(await updateCity(chatId, location));
});

router.get('/get-bot-api-key', getBotApiKey);
router.post('/update-bot-api-key', updateBotApiKey);
router.get('/get-users', getUsers);

router.put('/block-user/:id', blockUser);
router.put('/unblock-user/:id', unblockUser);

router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;

  // Find the user index and remove it from the array
  const index = users.findIndex(user => user._id.toString() === userId.toString());

  if (index !== -1) {
    users.splice(index, 1);
    res.send(`User with ID ${userId} deleted`);
  } else {
    res.status(404).send('User not found');
  }
});

export default router;
