import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import weatherReport from "./weather.js";
import TelegramBot from "node-telegram-bot-api";
import cron from "node-cron";
import {subscribe, updateCity, getData, unSubscribe} from "./controller/subscriptionController.js"
import Connection from "./db.js";
import Routes from "./routes/route.js";
import cors from "cors";

dotenv.config();
Connection(process.env.MONGO_URL);

const PORT = process.env.BOT_PORT;
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", Routes);

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message =
    "Welcome to the weather update bot! Type /subscribe to receive daily weather updates.";
  bot.sendMessage(chatId, message);
});

bot.onText(/\/subscribe/, (msg) => {
  const chatId = msg.chat.id;
  subscribe(chatId, "India");
  bot.sendMessage(
    chatId,
    'You have subscribed to daily weather updates. Please Enter the location as "location=Your city name"'
  );
  bot.sendMessage(chatId, "To get update of any city just say city name.");
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();
  
  var isCityAvilable = false;
  
  if (message.startsWith("location=")) {
    isCityAvilable = true;
    var city = "Patna";
    city = message.substring(9, message.length);
    updateCity(chatId, city);
    bot.sendMessage(chatId, `Your city has been updated to ${city}.`);

  } else if (message != "/subscribe" && message != "/start" && message != "/unsubscribe") {
    isCityAvilable = true;
    city = message;
  }

  if (isCityAvilable) {
    var report = await weatherReport(city);
    bot.sendMessage(chatId, report);
  }
  if (message === "/unsubscribe") {
    unSubscribe(chatId);
    bot.sendMessage(
      chatId,
      "You have unsubscribed from daily weather updates."
    );
  }
});

const sendDailyWeatherUpdates = async () => {

  
  const subscribers = await getData();
  for(let i = 0; i < subscribers.length; i++){
    let subscriberId = subscribers[i]._id;
    let subscriberCity = subscribers[i].city;
    var report = await weatherReport(subscriberCity);
    bot.sendMessage(subscriberId, report);
  }
}

cron.schedule("0 8 * * *", () => {
  sendDailyWeatherUpdates();
});