import { useMemo } from "react";

export const useSortedEvents = (events) => {
  const sortedEvents = useMemo(() => {
    const eventsToSort = [...events];

    return eventsToSort.sort((a, b) => {
      const timeDifference = new Date(a.start_time) - new Date(b.start_time);
      if (timeDifference === 0) {
        return a.id - b.id;
      }
      return timeDifference;
    });
  }, [events]);

  return sortedEvents;
};
