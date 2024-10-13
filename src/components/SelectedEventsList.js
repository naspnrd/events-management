import React from "react";
import { formatTime } from "../utils/helpers";

const SelectedEventsList = ({ selectedEvents, onDeselect }) => {
  return (
    <div className="selected-events-list">
      {selectedEvents.map((event) => (
        <div key={event.id} className="event-card">
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
              style={{ backgroundColor: "#ead3cb" }}
              onClick={() => onDeselect(event)}
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedEventsList;
