import express, { Request, Response} from 'express';
import { Telegraf } from 'telegraf';
// import { config } from './config/config';


const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const URL_WEBHOOK = 'https://narydnay-bot.vercel.app';
// const TOKEN = config.get('token-bot');
// const URL_WEBHOOK = config.get('host');
const WH_PATH = '/bot' + TOKEN;

export const bot = new Telegraf(TOKEN);

const app = express();
const PORT = 8000;

// console.log({config: config.get('host')})
bot.on('text', ctx => {
  ctx.reply('hi bro we work good ...? import data check')
})
bot.telegram.setWebhook(URL_WEBHOOK + WH_PATH)

app.get('/', async (_req: Request, res: Response)=>{
   const dataBot = await bot.telegram.getMe()
  res.send(JSON.stringify({deploy: 5,...dataBot}, null, 4  ))
});

app.use(bot.webhookCallback(WH_PATH))

app.listen(PORT, () => {
   try {
    console.log(`Server is up and Running at PORT : ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));