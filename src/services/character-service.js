import axios from 'axios';
import API from './api';

export const getCharacters = async (
  query = { name: '', gender: '', status: '' },
  page = 1
) => {
  try {
    const response = await API.get('/character', {
      params: {
        name: query.name,
        status: query.status,
        gender: query.gender,
        page,
      },
    });

    return response.data;
  } catch (err) {
    return { error: 'No Result' };
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await API.get(`/character/${id}`);

    return response.data;
  } catch (err) {
    return { error: 'No result' };
  }
};

export const getEpisodesInfo = async (episodes) => {
  try {
    const episodeData = await axios.all([
      ...episodes.map((ep) => axios.get(ep)),
    ]);

    return episodeData.map(({ data }) => ({
      name: data.name,
      episode: data.episode,
    }));
  } catch (err) {
    return { error: 'We could not get episodes info' };
  }
};
