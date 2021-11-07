export default {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}