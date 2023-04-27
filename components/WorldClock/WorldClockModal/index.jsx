import React, { useContext, useCallback } from "react";
import { Button, Modal, Text, View } from "react-native";
import ChasyContext from "../../AppContext";
import { WorldClocks } from "../../../constants/worldClocks";
import { styles } from "./styles";

const WorldClockModal = ({ visible, setModalVisible }) => {
  const { worldClocks, setWorldClocks } = useContext(ChasyContext);

  const handleAddClock = useCallback(
    (addLabel) => {
      const isAdded = worldClocks.find(({ label }) => label === addLabel);

      if (!isAdded) {
        const toAdd = WorldClocks.find(({ label }) => label === addLabel);
        setWorldClocks((prev) => [...prev, toAdd]);
      }

      setModalVisible(false);
    },
    [worldClocks, setWorldClocks]
  );

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topButton} onPress={() => setModalVisible(false)}>
            Cancel
          </Text>
        </View>
        <View>
          <View style={styles.divider} />
          {WorldClocks.map(({ label }, key) => (
            <View key={key}>
              <View style={styles.optionContainer}>
                <Text style={styles.option} onPress={() => handleAddClock(label)}>
                  {label}
                </Text>
              </View>
              <View style={styles.divider} />
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default WorldClockModal;
