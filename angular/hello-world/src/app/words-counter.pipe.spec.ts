import { WordsCounterPipe } from './words-counter.pipe';

describe('WordsCounterPipe', () => {
  let pipe: WordsCounterPipe;

  beforeEach(() => {
    pipe = new WordsCounterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return zero for empty string', () => {
    const input = '';
    const result = pipe.transform(input);
    expect(result).toBe(0);
  });

  it('should ignore double spaces', () => {
    const input = 'couple  words';
    const result = pipe.transform(input);
    expect(result).toBe(2);
  });
});
