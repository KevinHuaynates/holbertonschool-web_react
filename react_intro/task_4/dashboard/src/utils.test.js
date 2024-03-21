// Importa las funciones que vamos a probar
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Prueba para verificar que la función getFullYear devuelve el año correcto
describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = (new Date()).getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

// Prueba para verificar que getFooterCopy devuelve la cadena correcta cuando el argumento es verdadero
describe('getFooterCopy', () => {
  it('should return "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });
});

// Prueba para verificar que getFooterCopy devuelve la cadena correcta cuando el argumento es falso
describe('getFooterCopy', () => {
  it('should return "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

// Prueba para verificar que getLatestNotification devuelve una cadena no vacía
describe('getLatestNotification', () => {
  it('should return a non-empty string', () => {
    expect(getLatestNotification()).toBeTruthy();
  });
});

