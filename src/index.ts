import express, { Request, Response} from 'express';
import { Telegraf } from 'telegraf';

const bot = new Telegraf('6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc');

const app = express();
const PORT = 8000;
bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})
app.get('/', (_req: Request, res: Response)=>{

  res.send('Router work good')
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `);
})