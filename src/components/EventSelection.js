import React from "react";
import { events as mockData } from "../data/mockData";
import EventList from "./EventList";
import SelectedEventsList from "./SelectedEventsList";
import "../App.css";
import { useSortedEvents } from "../customHooks/useSortedEvent";
import { useEventSelection } from "../customHooks/useEventSelection";

const EventSelection = () => {
  const sortedMockData = useSortedEvents(mockData);

  const {
    remainingEvents,
    selectedEvents,
    disabledEvents,
    handleSelect,
    handleDeselect,
  } = useEventSelection(sortedMockData);

  return (
    <div className="app-container">
      <div className="events-section" data-testid="events-section">
        <p>All Events</p>
        <EventList
          events={remainingEvents}
          onSelect={handleSelect}
          disabledEvents={disabledEvents}
        />
      </div>
      <div
        className="selected-events-section"
        data-testid="selected-events-section"
      >
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
