// jest.config.js

module.exports = {
  // Directorios donde Jest buscará archivos de prueba
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  // Transforma archivos con Babel para permitir el uso de import/export
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Indica a Jest que ignore los archivos de node_modules
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Opcional: establece un directorio para resultados de cobertura de pruebas
  coverageDirectory: '<rootDir>/coverage',
};

