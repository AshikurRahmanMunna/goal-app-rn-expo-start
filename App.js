import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import shortid from "shortid";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalItem from "./components/GoalItem/GoalItem";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const addGoalHandler = () => {
    if (goal) {
      setCourseGoals((prev) => [
        ...prev,
        { text: goal, id: shortid.generate() },
      ]);
    }
    setGoal("");
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => prev.filter((g) => g.id !== id));
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Add New Goal"
            color={"#a065e6"}
            onPress={() => setModalActive(true)}
          />
        </View>
        {modalActive && (
          <GoalInput
            goal={goal}
            setGoal={setGoal}
            addGoalHandler={addGoalHandler}
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={true}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  deleteGoalHandler={deleteGoalHandler}
                  item={itemData.item}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
