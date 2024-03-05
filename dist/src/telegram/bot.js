"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const telegraf_1 = require("telegraf");
require("dotenv/config");
const server_1 = require("../../config/server");
exports.bot = new telegraf_1.Telegraf(server_1.config.get('token-bot'));
// export const setupWebhook = async () => {
//   try {
//       const { data } = await axios.get(`${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`)
//       console.log(data)
//   } catch (error) {
//       return error
//   }
// }
exports.bot.on('text', ctx => {
    ctx.reply('hi bro!!! :)');
});
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
exports.bot.launch();
//# sourceMappingURL=bot.js.map