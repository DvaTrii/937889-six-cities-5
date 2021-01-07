module.exports = {
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  moduleNameMapper: {'\\.(css|less)$': `<rootDir>/styleMock.js`},
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
};
