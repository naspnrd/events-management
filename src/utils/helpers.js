export const formatTime = (dateString) => {
  if (isNaN(Date.parse(dateString))) {
    return "";
  }
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(dateString)
    .toLocaleTimeString([], options)
    .replace(":00", "")
    .toUpperCase();
};

export const isConflict = (event1, event2) => {
  const start1 = new Date(event1.start_time);
  const end1 = new Date(event1.end_time);
  const start2 = new Date(event2.start_time);
  const end2 = new Date(event2.end_time);

  return start1 < end2 && start2 < end1;
};
