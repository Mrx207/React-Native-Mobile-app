import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ item, onDelete, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDelete.bind(this, id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.goal}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goal: {
    padding: 8,
    color: "white",
  },
});
