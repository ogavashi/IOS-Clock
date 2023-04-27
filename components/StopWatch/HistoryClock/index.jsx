import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const HistoryClock = ({ time, number }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.text}>Loop {number}</Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

export default HistoryClock;
