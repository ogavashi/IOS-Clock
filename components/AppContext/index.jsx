import React, { createContext, useState } from "react";
import { WorldClocks } from "../../constants/worldClocks";
import { AlarmClocks } from "../../constants/alarmClocks";
import { useStopWatch } from "../../hooks/useStopWatch";
import { useTimer } from "../../hooks/useTimer";

const ChasyContext = createContext();

const AppContextProvider = ({ children }) => {
  const [worldClocks, setWorldClocks] = useState([WorldClocks[0]]);
  const [alarmClocks, setAlarmClocks] = useState(AlarmClocks);

  const { reset, startAndStop, timeString, isRunning, getPropertime, timeStamps } = useStopWatch();
  const { time, isActive, toggleTimer, resetTimer, setTimer, getProperTime } = useTimer();

  return (
    <ChasyContext.Provider
      value={{
        worldClocks,
        setWorldClocks,
        reset,
        startAndStop,
        timeString,
        isRunning,
        getPropertime,
        timeStamps,
        alarmClocks,
        setAlarmClocks,
        time,
        isActive,
        toggleTimer,
        resetTimer,
        setTimer,
        getProperTime,
      }}
    >
      {children}
    </ChasyContext.Provider>
  );
};

export { AppContextProvider };
export default ChasyContext;
