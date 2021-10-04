import express from 'express';
import 'express-async-error';
import {
  create,
  remove,
  getAll,
  getAllByUsername,
  getById,
  update,
} from '../data/tweetsData.js';

const router = express.Router();
export const getAllTweets = async (req, res) => {
  const { query } = req;
  const sendData = await (query.username
    ? getAllByUsername(query.username)
    : getAll());
  res.status(200).send(sendData);
};

export const getTweetsById = async (req, res) => {
  const { params } = req;
  const { id } = params;
  const findTweets = await getById(Number(id));
  const statusCode = findTweets ? 200 : 404;
  const sendData = findTweets ? findTweets : '없어요';
  res.status(statusCode).send(sendData);
};

export const createTweets = async (req, res) => {
  const { text, name, username } = req.body;
  const insertTweet = await create(text, username, name);
  res.status(200).send(insertTweet);
};

export const deleteTweet = async (req, res) => {
  const { id } = req.params;
  const statusCode = await remove(id);
  res.status(statusCode).end();
};

export const updateTweet = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const { text } = body;
  const updateData = await update(id, text);
  if (updateData) {
    res.status(200).send(updateData);
  } else {
    res.status(500).send(null);
  }
};
