module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|style)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'scss', 'json'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['./config/setupTest.js'],
}
