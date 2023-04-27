import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#141416",
    borderRadius: 15,
  },
  picker: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    textAlign: "center",
    fontSize: 16,
    border: "none",
    outlineStyle: "none",
    color: "white",
    backgroundColor: "#141416",
  },
  pickerItem: {
    fontSize: 30,
    height: 100,
  },
  colon: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: "white",
  },
});
