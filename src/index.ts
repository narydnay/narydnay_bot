import express, { Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (_req: Request, res: Response) => {
  return res.send('express Typesscript on Vercel work');
})

app.get('/ping', (_req: Request, res: Response)=>{
  return res.send('pong 🏓')
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT} `))