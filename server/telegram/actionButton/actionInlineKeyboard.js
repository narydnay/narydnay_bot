import { listNames } from "../fakeDb/fakeDb.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const handlerActionUser = ( tg, ctx) =>{
  try {
    const actionButton = ctx.update.callback_query.data;

    const namePhotoCard = actionButton + '.jpg'
    ctx.replyWithPhoto({ source: path.join(__dirname, '../../../', 'public/','images/',namePhotoCard)});//namePhotoCard))
    ctx.reply(namePhotoCard)
    console.log({namePhotoCard: path.join(__dirname, '../../../')})
    
  } catch (error) {
    ctx.reply('з технічних причин фоното не було знайдено')
  }

}