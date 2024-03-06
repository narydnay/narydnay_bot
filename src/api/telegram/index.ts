import { Telegraf } from "telegraf";
import { config } from "../../config/config";

const bot = new Telegraf(config.get('token-bot'));

bot.on('text', ctx => {
  ctx.reply('hi bro we work good ...? import data check')
})