const nextJest = require('next/jest')
const { configureNextJestPreview } = require('jest-preview')

const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = configureNextJestPreview(createJestConfig(customJestConfig))
