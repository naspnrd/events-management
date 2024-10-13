import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, onSelect, disabledEvents }) => {
  const isDisabled = (event) => {
    return disabledEvents.some(
      (disabledEvent) => disabledEvent.id === event.id
    );
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSelect={onSelect}
          isSelectable={!isDisabled(event)}
          disabled={isDisabled(event)}
        />
      ))}
    </div>
  );
};

export default EventList;
