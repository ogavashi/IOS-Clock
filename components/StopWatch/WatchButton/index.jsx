import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

const WatchButton = ({ title, bgColor, color, onClick }) => {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        backgroundColor: bgColor,
        padding: 2,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid black",
          borderRadius: "50%",
          backgroundColor: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color, fontSize: 22, fontWeight: 400 }} onPress={onClick}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default WatchButton;
