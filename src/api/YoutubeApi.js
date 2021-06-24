import axios from 'axios';

const KEY = 'AIzaSyASk6rA4fPkBQdbqlllFASlXQR3W5Fmcs8';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleleapis.com/youtube/v3",
});