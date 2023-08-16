import { StyleSheet, View, Text } from "react-native";

function GoalItem({ item }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goal}>{item.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
