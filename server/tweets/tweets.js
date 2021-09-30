import express from 'express';
import 'express-async-error';

const router = express.Router();

let initailizeTweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다1',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 2,
    text: '드림코딩에서 강의 들으면 너무 좋으다2',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 3,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 4,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅋㅋ',
    username: 'dd',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 5,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅇㅇ',
    username: 'ellie',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 6,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅂㅂ',
    username: 'ff',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 7,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅂㅂ1',
    username: 'ff',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 8,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅂㅂ3',
    username: 'ff1',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 9,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅂㅂ4',
    username: 'ff2',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 10,
    text: '드림코딩에서 강의 들으면 너무 좋으다3',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'ㅂㅂ5',
    username: 'ff1',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

router.get('/', (req, res) => {
  const { query } = req;
  const sendData = query.username
    ? initailizeTweets.filter((tweet) => tweet.username === query.username)
    : initailizeTweets;
  res.status(200).send(sendData);
});

router.post('/', (req, res) => {
  const { body } = req;
  const insertTweet = { ...body, id: initailizeTweets.length + 1 };
  initailizeTweets.push(insertTweet);
  res.status(200).send(insertTweet);
});

router.delete('/:id', (req, res) => {
  const { params } = req;
  const { id } = params;
  const delIndex = initailizeTweets.findIndex((tweet) => tweet.id == id);
  const statusCode = delIndex >= 0 ? 200 : 202;
  if (statusCode === 200) initailizeTweets.splice(delIndex, 1);
  res.status(statusCode).end();
});

router.put('/:id', (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const { text } = body;
  const updateIndex = initailizeTweets.findIndex((tweet) => tweet.id == id);
  const statusCode = updateIndex >= 0 ? 200 : 202;
  if (statusCode === 200) {
    console.log(text);
    const updateTweet = {
      ...initailizeTweets[updateIndex],
      id: Number(id),
      text: text,
    };
    initailizeTweets.splice(updateIndex, 1, updateTweet);
    console.log(updateTweet);
  }

  res
    .status(statusCode)
    .send(statusCode === 200 ? initailizeTweets[updateIndex] : null);
});

router.get('/:id', (req, res) => {
  const { params } = req;
  const { id } = params;
  const findTweets = initailizeTweets.find((tweet) => tweet.id == Number(id));
  const statusCode = findTweets ? 200 : 404;
  const sendData = findTweets ? findTweets : '없어요';
  res.status(statusCode).send(sendData);
});

export default router;
