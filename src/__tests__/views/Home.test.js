import Home from '../../views/Home';

jest.mock('../../services/character-service.js');

describe('Home tests', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
});
