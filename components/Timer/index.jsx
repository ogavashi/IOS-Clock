import React, { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import ChasyContext from "../AppContext";
import WatchButton from "../StopWatch/WatchButton";
import TimePicker from "./TimePicker";
import { checkZero } from "../../utils/checkZero";

const Timer = () => {
  const {
    time: timerValue,
    isActive,
    toggleTimer,
    resetTimer,
    setTimer,
    getProperTime,
  } = useContext(ChasyContext);

  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const handleClickGreen = () => {
    if (checkZero(time)) return;
    setTimer(time);
    toggleTimer();
  };

  const handleReset = () => {
    setTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    resetTimer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        {isActive || timerValue ? (
          <Text style={[styles.time, !isActive && styles.pause]}>{getProperTime()}</Text>
        ) : (
          <TimePicker time={time} setTime={setTime} />
        )}
      </View>
      <View style={styles.buttons}>
        <WatchButton
          title="Reset"
          bgColor="rgba(64,60,60, 0.5)"
          color="white"
          onClick={handleReset}
        />
        <WatchButton
          title={!timerValue ? "Start" : isActive ? "Pause" : "Start"}
          bgColor="rgba(28,56,20, 0.5)"
          color="#29b84c"
          onClick={handleClickGreen}
        />
      </View>
      <ScrollView style={styles.history}>
        <View style={styles.divider} />
      </ScrollView>
    </View>
  );
};

export default Timer;
