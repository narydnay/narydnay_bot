import express from "express";

const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
  console.log('all work')
  res.send('Hi bro!!!')
})

app.listen(PORT, ()=>console.log(`Server start on PORT ${PORT}`))


export default app;