import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    color: "orange",
    fontSize: 14,
    opacity: 0.9,
  },
  buttonPls: {
    color: "orange",
    fontSize: 24,
    opacity: 0.9,
  },
  headerContainer: { display: "flex", justifyContent: "flex-start", width: "100%" },
  header: {
    color: "white",
    fontWeight: 600,
    fontSize: 34,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  subHeader: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
  },
  clockContainer: {
    display: "flex",
    width: "100%",
  },
  worldClock: {
    color: "white",
  },
  divider: {
    border: "1px solid white",
    opacity: 0.1,
    width: "100%",
  },
  nothing: {
    color: "white",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 40,
    marginTop: 200,
  },
});
