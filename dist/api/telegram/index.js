"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("../../config/config");
const bot = new telegraf_1.Telegraf(config_1.config.get('token-bot'));
bot.on('text', ctx => {
    ctx.reply('hi bro we work good ...? import data check');
});
//# sourceMappingURL=index.js.map