import { Router, Response, Request } from "express";


export const route = Router();

route.get('/', (_req: Request, res: Response)=>{

  res.send('Router work good')
})