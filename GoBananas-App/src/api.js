import axios from 'axios';
// Fetch data from API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
