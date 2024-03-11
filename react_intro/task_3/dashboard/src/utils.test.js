import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy function', () => {
  it('should return "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('should return the correct string', () => {
    const notification = getLatestNotification();
    expect(notification).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

