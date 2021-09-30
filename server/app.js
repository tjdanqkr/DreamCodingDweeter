import express from 'express';
import 'express-async-error';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './tweets/tweets.js';

const app = express();

const corsOption = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true, //Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors(corsOption));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error('error log : ', err);
  return res.sendStatus(500);
});

app.listen(8080);
