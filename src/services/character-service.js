import axios from 'axios';

const BASE_API_URI = 'https://rickandmortyapi.com/api';

export const getCharacters = async (
  query = { name: '', gender: '', status: '' },
  page = 1
) => {
  try {
    const response = await axios.get(`${BASE_API_URI}/character`, {
      params: {
        page: page,
        name: query.name,
        gender: query.gender,
        status: query.status,
      },
    });

    return response.data;
  } catch (err) {
    return { error: 'No Result' };
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URI}/character/${id}`);

    return response.data;
  } catch (err) {
    return { error: 'No Result' };
  }
};

export const getEpisodesInfo = async (episodes) => {
  try {
    // const episodeData = await axios.all([
    //   ...episodes.map((ep) => axios.get(ep)),
    // ]);

    const episodeData = [];

    for(let i = 0; i < episodes.length; i++) {
      episodeData.push(await axios.get(episodes[i]))
    }

    return episodeData.map(({ data }) => ({
      name: data.name,
      episode: data.episode,
    }));
  } catch (err) {
    return { error: 'We could not get episodes info' };
  }
};
