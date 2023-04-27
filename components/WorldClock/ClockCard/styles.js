import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  timeZone: {
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  top: { color: "white", opacity: 0.5, fontSize: 14 },
  bottom: { color: "white", fontSize: 24 },
  time: {
    color: "white",
    fontSize: 44,
  },
  minusIcon: {
    borderRadius: "50%",
    width: 20,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  minus: {
    color: "white",
    fontWeight: 800,
    textAlign: "center",
  },
});
