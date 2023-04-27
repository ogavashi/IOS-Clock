import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import WatchButton from "./WatchButton";
import HistoryClock from "./HistoryClock";
import ChasyContext from "../AppContext";

const StopWatch = () => {
  const { reset, startAndStop, timeString, isRunning, getPropertime, timeStamps } =
    useContext(ChasyContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stopWatch}>{timeString}</Text>
      </View>
      <View style={styles.buttons}>
        <WatchButton title="Reset" bgColor="rgba(64,60,60, 0.5)" color="white" onClick={reset} />
        <WatchButton
          title={isRunning ? "Pause" : "Start"}
          bgColor="rgba(28,56,20, 0.5)"
          color="#29b84c"
          onClick={startAndStop}
        />
      </View>
      <ScrollView style={styles.history}>
        <View style={styles.divider} />
        {timeStamps.map((time, key) => (
          <View key={key}>
            <HistoryClock time={getPropertime(time)} number={key + 1} />
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StopWatch;
