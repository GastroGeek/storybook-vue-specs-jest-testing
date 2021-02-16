/**
 * mostly stolen from docs/repos... tweak as needed.
 */
module.exports = {
  displayName: 'My Tests',
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  testMatch: ['**\/src\/**\/*.tests.js'],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/","<rootDir>/.storybook/"],
  setupFiles: [
    '<rootDir>/tests.setup.js'
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**\/src\/**\/*.{js,vue}'
  ],
  coveragePathIgnorePatterns: [
    '.stories.js'
  ],
  coverageReporters: ["text"],
  noStackTrace: true
}