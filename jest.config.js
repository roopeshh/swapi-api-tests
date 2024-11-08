module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './xml-report',
        outputName: 'junit-report.xml',
      },
    ],
  ],
};
