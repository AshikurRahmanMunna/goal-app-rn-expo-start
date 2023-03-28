import { Image, Modal } from "react-native";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({
  goal,
  setGoal,
  addGoalHandler,
  modalActive,
  setModalActive,
}) => {
  return (
    <Modal animationType="slide" visible={modalActive}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          value={goal}
          onChangeText={(text) => setGoal(text)}
          placeholder="Enter your goal"
          placeholderTextColor={"#fff"}
        />
        <View style={styles.buttonCOntainer}>
          <View style={styles.button}>
            <Button
              onPress={() => setModalActive(false)}
              title="Cancel"
              color={"#f31282"}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler();
                setModalActive(false);
              }}
              title="Add Goal"
              color={"#5e0acc"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonCOntainer: {
    gap: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    flexGrow: 1,
  },
});
