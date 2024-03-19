import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  // Test getFullYear
  it('getFullYear should return the current year', () => {
    const mockDate = new Date('2023-11-21'); // Mock the current date
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    expect(getFullYear()).toBe(2023);
  });

  // Test getFooterCopy
  it('getFooterCopy should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('getFooterCopy should return "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // Test getLatestNotification
  it('getLatestNotification should return the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
