import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|gif|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.ts",
    // "^@/(.*)$": "<rootDir>$1",
    "^@/libs/(.*)$": "<rootDir>/libs/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1",
  },
};

export default createJestConfig(config);
