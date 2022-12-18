import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitacao de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Voce')).toThrow();
  });

  it('it should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
