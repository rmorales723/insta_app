import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb://@cluster0-shard-00-00.ismec.mongodb.net:27017,cluster0-shard-00-01.ismec.mongodb.net:27017,cluster0-shard-00-02.ismec.mongodb.net:27017/?ssl=true&replicaSet=atlas-45q7h9-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


// mongoose.set("strictQuery", false);
// mongoose.connect(CONNECTION_URL, () => {
//     console.log("Server is running!");
//   });

