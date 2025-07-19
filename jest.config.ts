import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point
    "^uuid$": require.resolve("uuid"),
  },
  preset: "jest-expo",
  setupFiles: ["./jestSetupFile.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|@aws-amplify/ui-react-native.*)",
  ],
};

export default config;
