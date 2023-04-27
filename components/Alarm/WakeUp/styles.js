import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  subContainer: {
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  mainText: {
    color: "white",
    fontSize: 42,
    fontWeight: 100,
  },
  subText: {
    color: "white",
    fontSize: 14,
    opacity: 0.6,
  },
  clock: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#282424",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonText: {
    color: "orange",
    textAlign: "center",
    fontSize: 12,
  },
});
