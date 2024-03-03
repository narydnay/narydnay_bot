import { Telegraf, Markup, Telegram } from "telegraf";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { handlerActionUser } from "./actionButton/actionInlineKeyboard.js";
import { matchNames, matchNamesSpecifics } from "../utils/util.js";
import { listNames } from "./fakeDb/fakeDb.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

void async function () {
  const bot = new Telegraf('6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc');
  const tg = new Telegram('6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc');

  bot.on('text', async ctx => {
    const { message } = ctx

    const img = path.join(__dirname, '../../', 'public/', 'images/', '1.jpg');
    const textMesageUserChat = message?.text;
    const idUserChat = message?.chat?.id;
    const firstNameUserChat = message?.chat?.first_name;

    let listMatches = [];
    if (textMesageUserChat.includes('?')) {
      listMatches = matchNamesSpecifics(textMesageUserChat, listNames)
    } else {
      listMatches = matchNames(textMesageUserChat, listNames)
    }

    if (listMatches.length) {
      const listInlineButton = listMatches.map(el => {
        /* Inline buttons. 2 side-by-side */
        // [ { text: "Button 1", callback_data: "btn-1" } ],            
        return [{
          text: el,
          callback_data: el
        }]
      });

      ctx.reply(`Перелiк запиту ${listMatches.length} карток`, {
        reply_markup: {
          // resize_keyboard:true,
          inline_keyboard: [...listInlineButton],
        }
      });
    } else {
      ctx.reply('По Вашому запиту знайдено 0 карток')
    }

    // ctx.reply(JSON.stringify(listMatches, null, 4))
    // ctx.reply(listMatches[0])
    // ctx.sendMessage(listMatches[0],Markup.inlineKeyboard([
    //   Markup.button.url('Name', 'https://test.ua')
    // ]))  


  })

  bot.on('callback_query', dataCallback => handlerActionUser(tg, dataCallback))








  bot.launch({
    webhook: {
      domain: 'https://narydnay-bot.vercel.app/',// Your domain URL (where server code will be deployed)
      port: 443
    }
  });

  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))

}()

// ctx.replyWithPhoto({ source: img })