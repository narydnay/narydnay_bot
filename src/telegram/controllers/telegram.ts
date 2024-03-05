import { Response, Request } from 'express';
import { bot } from '../bot';

const botController = {
  post: (_req: Request, res: Response) => {
    const { body } = _req;
    bot
    return res
    .status(200)
    .send('Data recive'+ JSON.stringify(body))
  }
}

export {
  botController
}


