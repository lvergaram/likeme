import express from "express";
import 'dotenv/config';
import postRouter from './src/Posts/post.routes.js';

const app = express();
const __dirname = import.meta.dirname

app.use( express.json())
app.use( express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/posts', postRouter )

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, ()=> {
  console.log(` app listening on port ${PORT} `)
})
