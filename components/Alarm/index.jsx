import React, { useLayoutEffect, useEffect, useState, useCallback, useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import WakeUp from "./WakeUp";
import AlarmCard from "./AlarmCard";
import ChasyContext from "../AppContext";
import AlarmModal from "./AlarmModal";

const Alarm = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
    setEditId(null);
  }, []);

  const { alarmClocks } = useContext(ChasyContext);

  const showModal = useCallback(() => setVisible(true), []);

  const cancelEdit = useCallback(() => {
    setVisible(false);
    setIsEdit(false);
    setEditId(null);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.buttonPls} onPress={showModal}>
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
    if (editId !== null) {
      showModal();
    }
  }, [editId]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Alarm</Text>
      </View>
      <WakeUp />
      <View style={styles.subContainer}>
        <Text style={styles.subHeader}>Other</Text>
      </View>
      <ScrollView style={styles.clockContainer}>
        {alarmClocks.length ? (
          alarmClocks.map((alarm, key) => (
            <View key={key}>
              <View style={styles.divider} />
              <AlarmCard alarm={alarm} isEdit={isEdit} setEditId={setEditId} id={key} />
            </View>
          ))
        ) : (
          <Text style={styles.nothing}>No alarms</Text>
        )}
      </ScrollView>
      <AlarmModal
        visible={visible}
        setModalVisible={setVisible}
        editId={editId}
        cancelEdit={cancelEdit}
      />
    </View>
  );
};

export default Alarm;
