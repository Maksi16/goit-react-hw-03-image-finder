import axios from 'axios';

// export const PER_PAGE = 12;

const params = {
  key: '28415242-e0e8b03e245983e2ec7e6c358',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const getImage = async (text, currentPage) => {
  const url = `https://pixabay.com/api/?q=${text}&page=${currentPage}`;
  const response = await axios.get(url, { params });
  return response.data.hits;
};
