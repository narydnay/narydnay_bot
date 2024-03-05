"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const telegraf_1 = require("telegraf");
const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;
const bot = new telegraf_1.Telegraf(TOKEN);
const app = (0, express_1.default)();
const PORT = 8000;
const URL_WEBHOOK = 'https://narydnay-bot.vercel.app/';
bot.on('text', ctx => {
    ctx.reply('hi bro we work good');
});
bot.telegram.setWebhook(URL_WEBHOOK + WH_PATH);
bot.launch();
app.use(bot.webhookCallback(WH_PATH));
app.get('/', (_req, res) => {
    res.send('Router work good');
});
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} `);
});
//# sourceMappingURL=index.js.map