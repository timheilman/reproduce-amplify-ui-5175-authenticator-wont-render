import { Amplify } from "aws-amplify";
import { Button } from "react-native";
import { libraryOptions, resourcesConfig } from "./amplifyConfig";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
Amplify.configure(resourcesConfig, libraryOptions);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
}
export default App;
