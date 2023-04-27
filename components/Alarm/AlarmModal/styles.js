import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202124",
    height: "100%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  topButton: {
    widht: "fit-content",
    display: "flex",
    justifyContent: "flex-end",
    color: "orange",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  },
  optionDlt: { textAlign: "center", fontSize: 18 },
  dltText: { color: "red" },
  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  divider: {
    border: "1px solid white",
    opacity: 0.1,
    width: "100%",
  },
});
