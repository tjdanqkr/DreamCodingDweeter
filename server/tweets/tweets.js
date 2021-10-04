import express from 'express';
import 'express-async-error';
import {
  createTweets,
  getAllTweets,
  getTweetsById,
  deleteTweet,
  updateTweet,
} from '../controller/tweetsController.js';
const router = express.Router();

router.get('/', getAllTweets);

router.post('/', createTweets);

router.delete('/:id', deleteTweet);

router.put('/:id', updateTweet);

router.get('/:id', getTweetsById);

export default router;
