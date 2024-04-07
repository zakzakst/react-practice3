module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    ],
  },
  testMatch: [
    // '<rootDir>/**/(*.)test.(js|jsx|ts|tsx)',
    "<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}",
    // '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
};
