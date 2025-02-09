export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Alterado de "node" para "jsdom"
  moduleNameMapper: {
    "^@renderer/(.*)$": "<rootDir>/src/renderer/src/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
  },
};
