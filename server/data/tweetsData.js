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

export const getAll = async () => {
  return initailizeTweets;
};

export const getAllByUsername = async (username) => {
  const TweetsbyUserName = initailizeTweets.filter(
    (tweet) => tweet.username === username,
  );
  return TweetsbyUserName;
};

export const getById = async (id) => {
  return initailizeTweets.find((tweet) => tweet.id == id);
};

export const create = async (text, username, name) => {
  const insertTweet = {
    id: initailizeTweets.length + 1,
    text,
    createdAt: new Date().toISOString(),
    name,
    username,
  };
  initailizeTweets.push(insertTweet);
  return insertTweet;
};

export const remove = async (id) => {
  const delIndex = initailizeTweets.findIndex((tweet) => tweet.id == id);
  const statusCode = delIndex >= 0 ? 200 : 202;
  if (statusCode === 200) initailizeTweets.splice(delIndex, 1);
  return statusCode;
};

export const update = async (id, text) => {
  const updateIndex = initailizeTweets.findIndex((tweet) => tweet.id == id);
  const statusCode = updateIndex >= 0 ? 200 : 202;
  if (statusCode === 200) {
    const updateTweet = {
      ...initailizeTweets[updateIndex],
      id: Number(id),
      text,
    };
    initailizeTweets.splice(updateIndex, 1, updateTweet);
  }
  return initailizeTweets[updateIndex];
};
