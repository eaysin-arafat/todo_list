function timeInfo(date = new Date(), locale = "en-US") {
  const times = {
    weekName: date.toLocaleDateString(locale, { weekday: "long" }),
    date: date.getDate(),
    month: date.toLocaleString("default", { month: "long" }),
  };
  return times;
}

export default timeInfo;
