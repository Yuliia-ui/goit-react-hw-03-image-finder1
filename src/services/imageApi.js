import axios from 'axios';
const apiKey = '17891162-afebe5dc75b3e3f8e0ce5e622';

const fetchImageWithQuery = (searchQuery, page = 0) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImageWithQuery,
};
