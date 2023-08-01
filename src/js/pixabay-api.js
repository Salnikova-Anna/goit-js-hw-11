import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38581445-6c76d31f6c77720205af17967';

export function fetchSearchQueryData(searchQuery, page) {
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=4`
  );
}
