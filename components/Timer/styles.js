import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    display: "flex",
  },
  picker: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
  },
  time: {
    color: "white",
    textAlign: "center",
    fontSize: 60,
  },
  pause: {
    opacity: 0.5,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  history: {
    padding: 20,
  },
  divider: {
    border: "1px solid white",
    opacity: 0.1,
    width: "100%",
  },
});
