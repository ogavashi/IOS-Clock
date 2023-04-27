import React, { useLayoutEffect, useContext, useState, useCallback } from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import ClockCard from "./ClockCard";
import { useTime } from "../../hooks/useTime";
import ChasyContext from "../AppContext";
import WorldClockModal from "./WorldClockModal";
import { useEffect } from "react";

const WorldClock = ({ navigation }) => {
  const currentTime = useTime();

  const { worldClocks } = useContext(ChasyContext);

  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = useCallback(() => setIsEdit((prev) => !prev), []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.buttonPls} onPress={() => setVisible(true)}>
          +
        </Text>
      ),
      headerLeft: () => (
        <Text style={styles.button} onPress={handleEdit}>
          {isEdit ? "Cancel" : "Edit"}
        </Text>
      ),
    });
  }, [navigation, isEdit]);

  useEffect(() => {
    if (!worldClocks.length) {
      setIsEdit(false);
    }
  }, [worldClocks, setIsEdit]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>World Clock</Text>
      </View>
      <View style={styles.clockContainer}>
        <View style={styles.divider} />

        {worldClocks.length ? (
          worldClocks.map(({ city, timeZone }, key) => (
            <View key={key}>
              <ClockCard city={city} timeZone={timeZone} time={currentTime} isEdit={isEdit} />
              <View style={styles.divider} />
            </View>
          ))
        ) : (
          <Text style={styles.nothing}>No clocks</Text>
        )}
      </View>
      <WorldClockModal visible={visible} setModalVisible={setVisible} />
    </View>
  );
};

export default WorldClock;
