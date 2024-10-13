import React, { useState } from "react";
import { events as mockData } from "../data/mockData";
import EventList from "./EventList";
import SelectedEventsList from "./SelectedEventsList";
import "../App.css";
import { MAX_SELECTED_EVENTS } from "../utils/constants";

const EventSelection = () => {
  const [remainingEvents, setRemainingEvents] = useState(mockData);

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
    if (selectedEvents.length < MAX_SELECTED_EVENTS) {
      setSelectedEvents((prevSelected) => [...prevSelected, event]);

      setRemainingEvents((prevEvents) =>
        prevEvents.filter((e) => e.id !== event.id)
      );
    }
  };

  // Handle deselecting an event
  const handleDeselect = (event) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.filter((e) => e.id !== event.id)
    );

    setRemainingEvents((prevEvents) => [...prevEvents, event]);
  };

  const disabledEvents = getDisabledEvents();

  return (
    <div className="app-container">
      <div className="events-section">
        <h2>All Events</h2>
        <EventList
          events={remainingEvents}
          onSelect={handleSelect}
          disabledEvents={disabledEvents}
        />
      </div>
      <div className="selected-events-section">
        <h2>Selected Events</h2>
        <SelectedEventsList
          selectedEvents={selectedEvents}
          onDeselect={handleDeselect}
        />
      </div>
    </div>
  );
};

export default EventSelection;
