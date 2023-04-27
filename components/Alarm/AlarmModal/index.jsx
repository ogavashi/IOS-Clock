import React, { useContext, useCallback, useState, useEffect } from "react";
import { Button, Modal, Text, View, Switch } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";

import { styles } from "./styles";
import ChasyContext from "../../AppContext";

const AlarmModal = ({ visible, setModalVisible, editId, cancelEdit }) => {
  const { alarmClocks, setAlarmClocks } = useContext(ChasyContext);

  const [showPicker, setShowPicker] = useState(false);
  const [alarmTime, setAlarmTime] = useState({ time: null, isEnabled: false });

  useEffect(() => {
    if (editId !== null) {
      const alarm = alarmClocks[editId];
      setAlarmTime(alarm);
    }
  }, [editId]);

  const handleSave = useCallback(() => {
    if (!alarmTime.time) {
      return;
    }

    if (editId !== null) {
      setAlarmClocks((prev) => {
        const newAlrams = prev.map((alarm, key) => (key === editId ? alarmTime : alarm));

        return newAlrams;
      });
      cancelEdit();
      return;
    }

    setAlarmClocks((prev) => [...prev, alarmTime]);
    setModalVisible(false);
  }, [alarmTime, editId]);

  const handleDelete = useCallback(() => {
    setAlarmClocks((prev) => prev.filter((_, key) => key !== editId));
    cancelEdit();
  }, [editId]);

  const toggleSwitch = useCallback(
    () => setAlarmTime((prev) => ({ ...prev, isEnabled: !prev.isEnabled })),
    []
  );

  const onDismiss = useCallback(() => {
    setShowPicker(false);
  }, [setShowPicker]);

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setShowPicker(false);

      const properH = String(hours).length === 1 ? "0" + hours : hours;
      const properM = String(minutes).length === 1 ? "0" + minutes : minutes;

      setAlarmTime((prev) => ({ ...prev, time: `${properH}:${properM}` }));
    },
    [setShowPicker]
  );

  const pickTime = useCallback(() => setShowPicker(true), []);

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
          <Text style={styles.topButton} onPress={cancelEdit}>
            Cancel
          </Text>
          <Text style={styles.text}>{editId !== null ? "Update" : "Add"}</Text>
          <Text style={styles.topButton} onPress={handleSave}>
            Save
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <Text style={styles.text}>Time</Text>
            <Text style={styles.text} onPress={pickTime}>
              {alarmTime.time} {">"}
            </Text>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <Text style={styles.text}>Enable</Text>
            <Switch onValueChange={toggleSwitch} value={alarmTime.isEnabled} />
          </View>
        </View>
        {editId !== null && (
          <View style={styles.optionsContainer}>
            <View style={styles.optionDlt}>
              <Text style={styles.dltText} onPress={handleDelete}>
                Delete
              </Text>
            </View>
          </View>
        )}
      </View>
      <TimePickerModal
        visible={showPicker}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        animationType="slide"
      />
    </Modal>
  );
};

export default AlarmModal;
