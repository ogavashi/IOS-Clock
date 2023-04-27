import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "./styles";

const WakeUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Ionicons name="bed" color="white" size={21} />
        <Text style={styles.text}>Sleep | Wake Up</Text>
      </View>
      <View style={styles.clock}>
        <View>
          <Text style={styles.mainText}>06:40</Text>
          <Text style={styles.subText}>Tomorrow Morning</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>CHANGE</Text>
        </View>
      </View>
    </View>
  );
};

export default WakeUp;
