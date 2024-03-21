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

  // Mapeo de módulos para manejar archivos CSS
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/Holberton.jpg.js',
	'\\.(css|less)$': 'identity-obj-proxy',
  },

  // Configuración de Enzyme
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Archivo para configurar Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'], // Serializador para Enzyme snapshots

  // Opcional: establece un directorio para resultados de cobertura de pruebas
  coverageDirectory: '<rootDir>/coverage',
};

