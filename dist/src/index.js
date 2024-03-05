"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { routers } from './admin/controllers/admin';
// import bodyParser from 'body-parser';
// import { bot } from './telegram/bot';
// import { config } from '../config/server';
// // Telegram API Configuration
// const TELEGRAM_TOKEN = config.get('token-bot');
// const SERVER_URL = config.get('url-server');
// const WH_PATH = '/bot' + config.get('url-server');
// console.log({TELEGRAM_TOKEN})
const app = (0, express_1.default)();
const PORT = 8000;
// app.use(bodyParser.json())
// bot.telegram.setWebhook(SERVER_URL + WH_PATH);
// app.use(bot.webhookCallback(WH_PATH))
// app.use(routers)
app.get('/', (_req, res) => {
    res.send('Router work good');
});
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} `);
});
//# sourceMappingURL=index.js.map