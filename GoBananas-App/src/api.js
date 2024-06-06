import axios from 'axios';
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '4f4b140a';  

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
