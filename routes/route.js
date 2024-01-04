import express from "express";

import {subscribe, unSubscribe, updateCity, getData, getOneSubscriber} from '../controller/subscriptionController.js';
import { getBotApiKey, updateBotApiKey, getUsers, blockUser, deleteUser } from "../controller/adminController.js";

const router = express.Router()

router.get('/', async (req, res)=>{
    res.send(await getData());
});
router.get('/:id', async(req, res)=>{
    var chatId = req.params.id;
    res.send(await getOneSubscriber(chatId));
})
router.post('/subscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;

    // checking for valid chatId
    if(chatId > 0){
        res.send(await subscribe(chatId, location));
    } else {
        res.send("Invalid Id, user not inserted");
    }
});
router.post('/unsubscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    res.send(await unSubscribe(chatId));
});
router.put('/:id', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;
    res.send(await updateCity(chatId, location));
});

router.get('/get-bot-api-key', getBotApiKey);
router.post('/update-bot-api-key', updateBotApiKey);
router.get('/get-users', getUsers);
router.put('/block-user/:id', blockUser);
router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;
  // Find the user index and remove it from the array
  const index = users.findIndex(user => user._id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.send(`User with ID ${userId} deleted`);
    console.log(index);
  } else {
    res.status(404).send('User not found');
  }
});


export default router;