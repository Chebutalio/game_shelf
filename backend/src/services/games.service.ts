import { rawgApi } from '../utils/apiClient';

export const fetchGames = async () => {
  const response = await rawgApi.get('/games', {
    params: {
      page_size: 10,
      ordering: '-released',
    },
  });

  return response.data.results;
};
