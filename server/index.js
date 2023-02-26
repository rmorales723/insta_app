import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.arguments(bodyParser.json({ limit: "30mb", extended: true }));
app.arguments(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.arguments(cors());

const CONNECTION_URL = 'mongodb+srv://rMorales:rMorales123@cluster0.ismec.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });