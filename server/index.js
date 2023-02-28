import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://rMorales:rMorales123@cluster0.ismec.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(error.message));

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL, () => {
    console.log("Server is running on 5000!");
  });

