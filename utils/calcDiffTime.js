import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const calcDiffTime = (time, timeZone) => {
  const currentTime = dayjs().tz(dayjs.tz.guess());
  const targetMoment = dayjs.tz(time, timeZone);

  const ctH = +currentTime.format("HH");
  const tMH = +targetMoment.format("HH");

  const ctD = +currentTime.day();
  const tMD = +targetMoment.day();

  if (tMD > ctD) {
    const day = "Tomorrow";
    const diff = 24 - ctH + tMH;

    return `${day}, +${diff}H`;
  }
  if (tMD < ctD) {
    const day = "Yesterday";
    const diff = 24 - tMH + ctH;

    return `${day}, -${diff}H`;
  }
  const day = "Today";

  if (ctH > tMH) {
    const difference = `, -${ctH - tMH}H`;
    return `${day} ${difference}`;
  }
  if (ctH < tMH) {
    const difference = `, +${tMH - ctH}H`;
    return `${day} ${difference}`;
  }

  return day;
};
