module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    '~components/(.*)$':  '<rootDir>/src/components/$1',
    '~layout/(.*)$':  '<rootDir>/src/components/layout/$1',
    '~constants/(.*)$':  '<rootDir>/src/constants/$1',
    '~hooks/(.*)$':  '<rootDir>/src/hooks/$1',
    '~input/(.*)$':  '<rootDir>/src/components/input/$1',
    '~homepage/(.*)$':  '<rootDir>/src/components/homepage/$1',
    '~projects/(.*)$':  '<rootDir>/src/components/projects/$1',
    '~music/(.*)$':  '<rootDir>/src/components/music/$1',
    '~about/(.*)$':  '<rootDir>/src/components/about/$1',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  testRunner: "jest-jasmine2",
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}