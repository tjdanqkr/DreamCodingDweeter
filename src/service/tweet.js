import axios from 'axios';
export default class TweetService {
  tweets = [
    {
      id: 1,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
  }
  async getTweets(username) {
    const response = await axios.get(
      `/tweets${username ? `?username=${username}` : ''}`,
    );
    const tweets = response.data;
    return tweets;
  }

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Ellie',
      username: 'ellie',
      text,
    };
    const response = await axios.post(`/tweets`, tweet);

    if (response.status === 200) return response.data;
    else return;
  }

  async deleteTweet(tweetId) {
    if (!tweetId) return;
    const response = await axios.delete(`/tweets/${tweetId}`);
    // if (response.status === 200) this.getTweets('');
  }

  async updateTweet(tweetId, text) {
    if (!tweetId) return;
    const params = { text };
    const response = await axios.put(`/tweets/${tweetId}`, params);
    if (response.status === 200) return response.data;
  }
}
