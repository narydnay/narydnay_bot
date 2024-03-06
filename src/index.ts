import express, { Request, Response} from 'express';
import { Telegraf } from 'telegraf';

const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;

const bot = new Telegraf(TOKEN);

const app = express();
const PORT = 8000;
const URL_WEBHOOK = 'https://narydnay-bot.vercel.app';

// Telegram API Configuration
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const webhookURL = `${URL_WEBHOOK}${URI}`;

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})
bot.telegram.setWebhook('https://beige-worlds-matter.loca.lt' + WH_PATH)

app.get('/', async (_req: Request, res: Response)=>{
   const dataBot = await bot.telegram.getMe()
  res.send(JSON.stringify(dataBot, null, 4))
})

app.use(bot.webhookCallback(WH_PATH))

app.listen(PORT, () => {
   try {
    console.log(`Server is up and Running at PORT : ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
})


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))