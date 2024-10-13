export const formatTime = (dateString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(dateString)
    .toLocaleTimeString([], options)
    .replace(":00", "")
    .toUpperCase();
};
