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
bot.on('text', ctx => {
    ctx.reply('hi bro we work good ...?');
});
bot.telegram.setWebhook('https://narydnay-bot.vercel.app' + WH_PATH);
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBot = yield bot.telegram.getMe();
    res.send(JSON.stringify(dataBot, null, 4));
}));
app.use(bot.webhookCallback(WH_PATH));
app.listen(PORT, () => {
    try {
        console.log(`Server is up and Running at PORT : ${PORT}`);
    }
    catch (error) {
        console.log(error.message);
    }
});
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
//# sourceMappingURL=index.js.map