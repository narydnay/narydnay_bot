import { Router, Response, Request } from "express";


export const routers = Router();

routers.get('/', (_req: Request, res: Response)=>{

  res.send('Router work good')
})

routers.get('/ping', (_req: Request, res: Response)=>{
  return res.send('pong 🏓')
})
