import express, { Request, Response} from 'express';
const app = express();
const PORT = 8000;
app.get('/', (_req: Request, res: Response)=>{

  res.send('Router work good')
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} `);
})