"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const telegraf_1 = require("telegraf");
const axios_1 = __importDefault(require("axios"));
const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;
const bot = new telegraf_1.Telegraf(TOKEN);
const app = (0, express_1.default)();
const PORT = 8000;
const URL_WEBHOOK = 'https://narydnay-bot.vercel.app';
// Telegram API Configuration
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const webhookURL = `${URL_WEBHOOK}${URI}`;
// configuring the bot via Telegram API to use our route below as webhook
const setupWebhook = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`);
        console.log(data);
    }
    catch (error) {
        return error;
    }
});
bot.on('text', ctx => {
    ctx.reply('hi bro we work good');
});
bot.telegram.setWebhook(URL_WEBHOOK + WH_PATH);
bot.launch();
app.get('/', (_req, res) => {
    res
        .status(200)
        .send('Router work good new data');
});
app.post(WH_PATH, (req, res) => {
    const { body } = req;
    bot.webhookCallback(WH_PATH);
    return res.status(200);
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is listening on ${PORT} `);
    // setting up our webhook url on server spinup
    try {
        console.log(`Server is up and Running at PORT : ${PORT}`);
        yield setupWebhook();
    }
    catch (error) {
        console.log(error.message);
    }
}));
//# sourceMappingURL=index.js.map