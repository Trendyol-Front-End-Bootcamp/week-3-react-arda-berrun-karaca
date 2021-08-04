import axios from 'axios';
import {
  getCharacters,
  getCharacter,
  getEpisodesInfo,
} from '../../services/character-service';

jest.mock('axios');

describe('Api services tests', () => {
  it('should return all characters from api', async () => {
    const mockData = [
      { id: 1, name: 'Rick Sanchez', status: 'Alive' },
      { id: 2, name: 'Morty Smith', status: 'Alive' },
    ];

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: mockData,
      });
    });

    expect(await getCharacters()).toEqual(mockData);
  });

  it('should throw an error when the api request failed', async () => {
    axios.get.mockImplementation(() => {
      return Promise.reject({ error: 'No Result' });
    });

    expect(await getCharacters()).toEqual({ error: 'No Result' });
  });

  it('should be return character datas by given id', async () => {
    const mockData = [{ id: 1, name: 'Rick Sanchez', status: 'Alive' }];

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: mockData,
      });
    });

    expect(await getCharacter(1)).toEqual(mockData);
  });

  it('should throw an error when the request failed', async () => {
    axios.get.mockImplementation(() => {
      return Promise.reject({ error: 'No Result' });
    });

    expect(await getCharacter()).toEqual({ error: 'No Result' });
  });
  it('should be return episode datas by given character episodes', async () => {
    const mockData = [
      { name: 'Episode 1', episode: 'S0E1' },
      { name: 'Episode 2', episode: 'S0E2' },
    ];

    axios.get
      .mockImplementationOnce(() => {
        return Promise.resolve({
          data: { name: 'Episode 1', episode: 'S0E1' },
        });
      })
      .mockImplementationOnce(() => {
        return Promise.resolve({
          data: { name: 'Episode 2', episode: 'S0E2' },
        });
      });

    expect(await getEpisodesInfo(['episode1api', 'episode2api'])).toEqual(
      mockData
    );
  });

  it('should throw an error when episode infos is not returned', async () => {
    axios.get.mockImplementation(() => {
      return Promise.reject({ error: 'We could not get episodes info' });
    });

    expect(await getEpisodesInfo()).toEqual({
      error: 'We could not get episodes info',
    });
  });
});
