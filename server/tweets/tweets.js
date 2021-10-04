import express from 'express';
import 'express-async-error';
import { body } from 'express-validator';
import {
  createTweets,
  getAllTweets,
  getTweetsById,
  deleteTweet,
  updateTweet,
} from '../controller/tweetsController.js';
import { validate } from '../middleware/valudate.js';
const router = express.Router();

router.get('/', getAllTweets);

const validateTweet = [
  body('text').trim().isLength({ min: 3 }).withMessage('3글자 이상'),
  validate,
];

router.post('/', validateTweet, createTweets);

router.delete('/:id', deleteTweet);

router.put('/:id', validateTweet, updateTweet);

router.get('/:id', getTweetsById);

export default router;
