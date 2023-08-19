import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [eneteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelAddGoalHandler() {
    setModalIsVisible(false);
  }

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
    cancelAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          cancel={cancelAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => {
              return (
                <GoalItem
                  id={item.id}
                  item={item}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
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
