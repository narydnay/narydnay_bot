import express, { Request, Response} from 'express';
import { Telegraf } from 'telegraf';
const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;

const bot = new Telegraf(TOKEN);

const app = express();
const PORT = 8000;
const URL_WEBHOOK = 'https://narydnay-bot.vercel.app/';

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})
bot.telegram.setWebhook(URL_WEBHOOK + WH_PATH)
bot.launch();

app.use(bot.webhookCallback(WH_PATH))
app.get('/', (_req: Request, res: Response)=>{

  res
  .status(200)
  .send('Router work good new data')
})

app.post(WH_PATH, (req: Request, res: Response)=>{

  return res.status(200)
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `);
})