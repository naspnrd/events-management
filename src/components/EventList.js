import React from "react";
import { formatTime } from "../utils/helpers";

const EventList = ({ events, onSelect, disabledEvents }) => {
  const isDisabled = (event) => {
    return disabledEvents.some(
      (disabledEvent) => disabledEvent.id === event.id
    );
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div
          key={event.id}
          className={`event-card ${isDisabled(event) ? "disabled" : ""}`}
        >
          <div className="event-category">
            {event.event_category.charAt(0).toUpperCase()}
          </div>
          <hr className="event-separator" />
          <div className="event-details">
            <div className="event-name">{event.event_name}</div>
            <div className="event-category-name">({event.event_category})</div>
            <div className="event-timing">
              {formatTime(event.start_time)} - {formatTime(event.end_time)}
            </div>
            <button
              onClick={() => onSelect(event)}
              disabled={isDisabled(event)}
            >
              SELECT
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
