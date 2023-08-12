import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import OpenURLButton from "./OpenUrl";
import { TextInput } from "react-native-web";

export default function App() {
  const supportedURL = "https://google.com";

  const unsupportedURL = "slack://open?team=123456";
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput
          placeholder="Your course goal"
          style={styles.inputContainer}
        ></TextInput>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
