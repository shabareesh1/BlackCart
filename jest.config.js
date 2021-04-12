module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    //      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    'node_modules[/\\\\](?!@amcharts[/\\\\]amcharts4)',
    '^.+\\.module\\.(css|sass|scss)$'
  ],

  //testEnvironment: 'node',
  setupTestFrameworkScriptFile: './setup.js',
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.(css|jpg|png)$': '<rootDir>/empty-module.js'
  },
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/src/**/index.{js,jsx,ts,tsx}']
};
