import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

const TimePicker = ({ time, setTime }) => {
  const handleTimeChange = (key, value) => {
    setTime((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={time.hours}
        onValueChange={(itemValue) => handleTimeChange("hours", itemValue)}
      >
        {Array.from(Array(24).keys()).map((i) => (
          <Picker.Item
            key={i}
            label={i < 10 ? `0${i}` : `${i}`}
            value={i < 10 ? `0${i}` : `${i}`}
          />
        ))}
      </Picker>
      <Text style={styles.colon}>hours</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={time.minutes}
        onValueChange={(itemValue) => handleTimeChange("minutes", itemValue)}
      >
        {Array.from(Array(60).keys()).map((i) => (
          <Picker.Item
            key={i}
            label={i < 10 ? `0${i}` : `${i}`}
            value={i < 10 ? `0${i}` : `${i}`}
          />
        ))}
      </Picker>
      <Text style={styles.colon}>min</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={time.seconds}
        onValueChange={(itemValue) => handleTimeChange("seconds", itemValue)}
      >
        {Array.from(Array(60).keys()).map((i) => (
          <Picker.Item
            key={i}
            label={i < 10 ? `0${i}` : `${i}`}
            value={i < 10 ? `0${i}` : `${i}`}
          />
        ))}
      </Picker>
      <Text style={styles.colon}>sec</Text>
    </View>
  );
};

export default TimePicker;
