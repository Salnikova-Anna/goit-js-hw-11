import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38581445-6c76d31f6c77720205af17967';
export const PER_PAGE = 40;

export async function fetchSearchQueryData(searchQuery, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`
  );
  return response;
}
