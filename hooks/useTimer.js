import { useState, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0 && isActive) {
      setTime(null);
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const setTimer = (value) => {
    if (time) return;

    const totalSeconds =
      parseInt(value.hours) * 3600 + parseInt(value.minutes) * 60 + parseInt(value.seconds);

    setTime(totalSeconds);
  };

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(null);
    setIsActive(false);
  };

  const getProperTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const remainingSeconds = time % 60;

    const hoursString = String(hours).padStart(2, "0");
    const minutesString = String(minutes).padStart(2, "0");
    const secondsString = String(remainingSeconds).padStart(2, "0");

    return `${hoursString}:${minutesString}:${secondsString}`;
  };

  return { time, isActive, toggleTimer, resetTimer, setTimer, getProperTime };
};
