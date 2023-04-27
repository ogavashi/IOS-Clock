import { useCallback } from "react";
import { useEffect, useMemo, useState } from "react";

export const useStopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeStamps, setTimeStamps] = useState([]);

  const reset = () => {
    setTime(0);
    setTimeStamps([]);
  };

  const startAndStop = () => {
    setIsRunning((prev) => {
      if (!prev === false) {
        setTimeStamps((prev) => [
          ...prev,
          prev.at(-1) ? time - prev.reduce((acc, cur) => (acc += cur), 0) : time,
        ]);
      }
      return !prev;
    });
  };

  const getPropertime = useCallback((rawTime) => {
    const timeObj = {
      hours: Math.floor(rawTime / 360000),
      minutes: Math.floor((rawTime % 360000) / 6000)
        .toString()
        .padStart(2, "0"),
      seconds: Math.floor((rawTime % 6000) / 100)
        .toString()
        .padStart(2, "0"),
      milliseconds: (rawTime % 100).toString().padStart(2, "0"),
    };

    return `${timeObj.hours ? `${timeObj.hours},` : ""}${timeObj.minutes}:${timeObj.seconds},${
      timeObj.milliseconds
    }`;
  }, []);

  const timeString = useMemo(() => getPropertime(time), [time]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return { reset, startAndStop, timeString, isRunning, getPropertime, timeStamps };
};
