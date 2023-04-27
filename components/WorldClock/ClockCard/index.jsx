import React, { useCallback, useContext, useEffect } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { Text, View } from "react-native";
import { styles } from "./styles";
import { calcDiffTime } from "../../../utils/calcDiffTime";
import ChasyContext from "../../AppContext";

dayjs.extend(timezone);
dayjs.extend(utc);

const ClockCard = ({ city, time, timeZone, isEdit }) => {
  const goodTime = dayjs.tz(time, timeZone);

  const diff = calcDiffTime(time, timeZone);

  const { setWorldClocks } = useContext(ChasyContext);

  const handleRemove = useCallback(() => {
    setWorldClocks((prev) => {
      const newClocks = prev.filter(({ city: oldCity }) => oldCity !== city);

      return newClocks;
    });
  }, [city]);

  return (
    <View style={styles.container}>
      {isEdit && (
        <View style={styles.minusIcon}>
          <Text style={styles.minus} onPress={handleRemove}>
            —
          </Text>
        </View>
      )}
      <View style={styles.timeZone}>
        <Text style={styles.top}>{diff}</Text>
        <Text style={styles.bottom}>{city}</Text>
      </View>
      <View>
        <Text style={styles.time}>{goodTime.format("HH:mm")}</Text>
      </View>
    </View>
  );
};

export default ClockCard;
