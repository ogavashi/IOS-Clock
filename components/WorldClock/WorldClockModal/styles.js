import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202124",
    height: "100%",
  },
  top: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
    padding: 20,
  },
  topButton: {
    widht: "fit-content",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
    color: "orange",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  option: {
    color: "white",
    fontSize: 24,
  },
  divider: {
    border: "1px solid white",
    opacity: 0.1,
    width: "100%",
  },
});
