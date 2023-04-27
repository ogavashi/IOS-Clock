import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clock: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTextEn: { color: "white", fontSize: 42, fontWeight: 100 },
  mainText: {
    color: "white",
    fontSize: 42,
    fontWeight: 100,
    opacity: 0.6,
  },
  subText: {
    color: "white",
    fontSize: 14,
    opacity: 0.6,
  },
  button: {
    borderRadius: 15,
    color: "orange",
  },
});
