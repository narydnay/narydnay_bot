import express, { Request, Response} from 'express';
import { routers } from './admin/controllers/admin';
import bodyParser from 'body-parser';
import { bot } from './telegram/bot';
import { config } from '../config/server';
// Telegram API Configuration
const TELEGRAM_TOKEN = config.get('token-bot');
const SERVER_URL = config.get('url-server');
const WH_PATH = '/bot' + config.get('url-server');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bot.webhookCallback(WH_PATH))
app.use(routers)

app.listen(PORT, () => {
  bot.telegram.setWebhook(SERVER_URL + WH_PATH);
  console.log(`Server is listening on ${PORT} `);
})