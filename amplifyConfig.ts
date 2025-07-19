import { Amplify, ResourcesConfig } from "aws-amplify";
export const resourcesConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: "fakeClientId",
      userPoolId: "fakeUserPoolId",
      loginWith: {
        email: true,
      },
    },
  },
};

export const libraryOptions: Parameters<(typeof Amplify)["configure"]>[1] = {};
