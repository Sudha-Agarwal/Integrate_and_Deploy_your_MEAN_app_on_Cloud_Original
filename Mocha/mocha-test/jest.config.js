module.exports= {
    testEnvironment: 'node',
    transform: {},
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      '**/*.mjs',
      '!**/node_modules/**',
      '!**/test/**'
    ],
  };
  