import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [eneteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: eneteredGoalText, id: Math.random().toString() },
      // { text: eneteredGoalText, key: Math.random().toString() },
    ]);
    this.textInput.clear();
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          ref={(input) => {
            this.textInput = input;
          }}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return <GoalItem item={item} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goal: {
    color: "white",
  },
});
