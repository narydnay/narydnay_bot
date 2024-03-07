import express, { Request, Response} from 'express';

const app = express();
const PORT = 8000;

app.get('/', async (_req: Request, res: Response)=>{
  res.status(200).send('ok! all work')
})

app.listen(PORT, () => {
   try {
    console.log(`Server is up and Running at PORT : ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}) 
