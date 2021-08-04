import CharacterDetail from '../../views/CharacterDetail';

jest.mock('../../services/character-service.js');

describe('CharacterDetail tests', () => {
  it('should be defined', () => {
    expect(CharacterDetail).toBeDefined();
  });
});
