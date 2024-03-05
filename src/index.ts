import express, { Request, Response} from 'express';
import { Telegraf } from 'telegraf';
import axios from 'axios';
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

// // configuring the bot via Telegram API to use our route below as webhook
// const setupWebhook = async () => {
//   try {
//     const { data } = await axios.get(
//       `${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`
//     );
//     console.log(data);
//   } catch (error) {
//     return error;
//   }
// };

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})
bot.telegram.setWebhook(URL_WEBHOOK + WH_PATH)

app.get('/', (_req: Request, res: Response)=>{

  res
  .sendStatus(200)
  .send('Router work good new data')
})

app.post(WH_PATH, (req: Request, res: Response)=>{
  const { body } = req;
  // bot.webhookCallback(WH_PATH)
  return res.sendStatus(200)
})

app.use(bot.webhookCallback(WH_PATH))

app.listen(PORT, async() => {
  console.log(`Server is listening on ${PORT} `);
   // setting up our webhook url on server spinup
   try {
    console.log(`Server is up and Running at PORT : ${PORT}`);
    // await setupWebhook();
  } catch (error) {
    console.log(error.message);
  }
})


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))