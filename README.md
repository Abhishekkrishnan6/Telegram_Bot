# Telegram Weather Update Bot
This project is a Telegram bot developed using Node.js that provides daily weather updates to subscribed users. It also includes an admin panel for managing bot settings and user accounts.

## Features
Users can subscribe to receive daily weather updates.
Users can unsubscribe from receiving weather updates.
Admin panel for managing bot settings and user accounts.
Prerequisites
Node.js installed on your machine
Telegram bot token obtained from the BotFather

## Installation
Clone the repository:
```bash
git clone https://github.com/Abhishekkrishnan6/Telegram_Bot.git
```
Navigate to the project directory:
```bash
cd Telegram-bot
```
Install the dependencies:
```bash
npm install
```
Create a .env file in the root directory and add the following variables:
```bash
BOT_PORT=3000
ADMIN_PORT=4000
BOT_TOKEN=<YOUR-BOT-TOKEN>
WEATHER_API=<YOUR-WEATHER-API>
```

## Usage
Start the bot server:
```bash
npm app.js
```

Start the admin panel server:
```bash
cd admin-panel-react
npm start
```

Access the bot in Telegram and search for your bot's username.

Use the following commands in the Telegram chat:

```bash
/start: Starts the bot and displays a welcome message.
/subscribe: Subscribes to receive daily weather updates.
/unsubscribe: Unsubscribes from receiving weather updates.
Access the admin panel by opening your web browser and navigating to http://localhost:4000.
```

Use the admin panel to manage bot settings and user accounts.

## Contributing
Contributions are welcome! If you have any suggestions or improvements for this project, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
This project was inspired by the need for daily weather updates on Telegram.
Special thanks to the developers and contributors of the Node.js, Telegram Bot API, and Express libraries.

# Video Tutorial :-

