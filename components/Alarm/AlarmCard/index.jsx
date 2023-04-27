import React, { useState, useContext, useMemo } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { Switch } from "react-native";
import { useCallback } from "react";
import ChasyContext from "../../AppContext";

const AlarmCard = ({ alarm, isEdit, setEditId, id }) => {
  const { setAlarmClocks } = useContext(ChasyContext);

  const isEnabled = useMemo(() => alarm.isEnabled, [alarm]);

  const toggleSwitch = useCallback(
    () =>
      setAlarmClocks((prev) =>
        prev.map((alarm, key) => (key === id ? { ...alarm, isEnabled: !alarm.isEnabled } : alarm))
      ),
    [alarm]
  );

  const handleClickEdit = useCallback(() => {
    setEditId(id);
  }, [id]);

  return (
    <View style={styles.clock}>
      <View>
        <Text style={isEnabled ? styles.mainTextEn : styles.mainText}>{alarm.time}</Text>
        <Text style={styles.subText}>Alarm</Text>
      </View>
      <View>
        {isEdit ? (
          <Button
            variant="outlined"
            style={{ borderRadius: 35 }}
            onPress={handleClickEdit}
            color="#282424"
            title="Edit"
          />
        ) : (
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        )}
      </View>
    </View>
  );
};

export default AlarmCard;
