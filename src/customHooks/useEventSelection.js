import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { MAX_SELECTED_EVENTS } from "../utils/constants";
import { useSortedEvents } from "../customHooks/useSortedEvent";
import { isConflict } from "../utils/helpers";

export const useEventSelection = (initialEvents) => {
  const [remainingEvents, setRemainingEvents] = useState(initialEvents);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const sortedRemainingEvents = useSortedEvents(remainingEvents);
  const sortedSelectedEvents = useSortedEvents(selectedEvents);

  const getDisabledEvents = useMemo(() => {
    return sortedRemainingEvents.filter((event) =>
      sortedSelectedEvents.some((selectedEvent) =>
        isConflict(event, selectedEvent)
      )
    );
  }, [sortedRemainingEvents, sortedSelectedEvents]);

  const handleSelect = (event) => {
    if (selectedEvents.length >= MAX_SELECTED_EVENTS) {
      return toast.error("Only 3 events can be selected");
    }

    setSelectedEvents((prevSelected) => [...prevSelected, event]);
    setRemainingEvents((prevEvents) =>
      prevEvents.filter((e) => e.id !== event.id)
    );
  };

  const handleDeselect = (event) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.filter((e) => e.id !== event.id)
    );
    setRemainingEvents((prevEvents) => [...prevEvents, event]);
  };

  return {
    remainingEvents: sortedRemainingEvents,
    selectedEvents: sortedSelectedEvents,
    disabledEvents: getDisabledEvents,
    handleSelect,
    handleDeselect,
  };
};
