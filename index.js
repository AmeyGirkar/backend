import express from 'express';
import mongoose from 'mongoose';
import cors from'cors';
import router from './routes/userRoute.js';
const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

mongoose.connect('mongodb+srv://root:testtest@cluster0.p8trw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error',(error)=> console.log(error));
db.once('open', () => {console.log('Connected to MongoDB ...');});
//middleware
app.use(cors());
app.use(express.json());

app.use(router)
//Creation of server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});