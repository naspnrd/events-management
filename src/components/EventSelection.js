import React, { useState } from "react";
import { toast } from "react-toastify";
import { events as mockData } from "../data/mockData";
import EventList from "./EventList";
import SelectedEventsList from "./SelectedEventsList";
import "../App.css";
import { MAX_SELECTED_EVENTS } from "../utils/constants";

const EventSelection = () => {
  const sortEvents = (events) => {
    return events.sort((a, b) => {
      const timeDifference = new Date(a.start_time) - new Date(b.start_time);
      if (timeDifference === 0) {
        return a.id - b.id;
      }
      return timeDifference;
    });
  };

  const sortedMockData = sortEvents([...mockData]);
  const [remainingEvents, setRemainingEvents] = useState(sortedMockData);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const isConflict = (event1, event2) => {
    const start1 = new Date(event1.start_time);
    const end1 = new Date(event1.end_time);
    const start2 = new Date(event2.start_time);
    const end2 = new Date(event2.end_time);

    return start1 < end2 && start2 < end1;
  };

  const getDisabledEvents = () => {
    return remainingEvents.filter((event) =>
      selectedEvents.some((selectedEvent) => isConflict(event, selectedEvent))
    );
  };

  const handleSelect = (event) => {
    if (selectedEvents.length >= MAX_SELECTED_EVENTS) {
      return toast.error("Only 3 events can be selected");
    }

    setSelectedEvents((prevSelected) => sortEvents([...prevSelected, event]));

    setRemainingEvents((prevEvents) =>
      sortEvents(prevEvents.filter((e) => e.id !== event.id))
    );
  };

  const handleDeselect = (event) => {
    setSelectedEvents((prevSelected) =>
      sortEvents(prevSelected.filter((e) => e.id !== event.id))
    );

    setRemainingEvents((prevEvents) => sortEvents([...prevEvents, event]));
  };

  const disabledEvents = getDisabledEvents();

  return (
    <div className="app-container">
      <div className="events-section">
        <p>All Events</p>
        <EventList
          events={remainingEvents}
          onSelect={handleSelect}
          disabledEvents={disabledEvents}
        />
      </div>
      <div className="selected-events-section">
        <p>Selected Events</p>
        <SelectedEventsList
          selectedEvents={selectedEvents}
          onDeselect={handleDeselect}
        />
      </div>
    </div>
  );
};

export default EventSelection;
