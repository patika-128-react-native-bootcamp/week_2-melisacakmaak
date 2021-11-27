import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "#babdbe",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: "#eceff1",
    justifyContent: "center",
    fontSize: 18,
    backgroundColor: "#eceff1",
  },
  button: {
    top: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#455a64",
    height: 50,
  },
  button_text: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});

export default styles;
