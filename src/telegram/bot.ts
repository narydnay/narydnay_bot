import { Telegraf } from 'telegraf';
import 'dotenv/config';
import { config } from '../../config/server';
import axios from 'axios';

export const bot = new Telegraf(config.get('token-bot'));





// export const setupWebhook = async () => {
//   try {
//       const { data } = await axios.get(`${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`)
//       console.log(data)
//   } catch (error) {
//       return error
//   }
// }



bot.on('text', ctx => {
  ctx.reply('hi bro!!! :)')
})

// console.log(process.env)
// if(process.env.environment == 'PRODUCTION'){
//   const domain = 'https://narydnay-bot.vercel.app/';
//   const port = 8000;
//   bot.launch({
//     webhook: {
//       domain,
//       port
//     }
//   })
//   .then(() => console.info(`The bot ${bot.botInfo.username} is running on server`));

// }else{
//   bot.launch()
//   .then(() => console.info(`The bot ${bot.botInfo.username} is running locally`));
// }

bot.launch()
