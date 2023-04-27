import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useTime = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      const localTime = dayjs();

      setCurrentTime(localTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};
