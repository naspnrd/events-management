import React from "react";
import { formatTime } from "../utils/helpers";

const EventCard = ({ event, onSelect, onDeselect, isSelectable }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(event);
    } else if (onDeselect) {
      onDeselect(event);
    }
  };

  return (
    <div className={`event-card ${isSelectable ? "" : "disabled"}`}>
      <div className="event-category">
        {event.event_category.charAt(0).toUpperCase()}
      </div>
      <hr className="event-separator" />
      <div className="event-details">
        <div className="event-name">{event.event_name}</div>
        <div className="event-category-name">{event.event_category}</div>
        <div className="event-timing">
          {formatTime(event.start_time)} - {formatTime(event.end_time)}
        </div>
        <button
          onClick={handleClick}
          disabled={!isSelectable}
          style={{ backgroundColor: onDeselect ? "#ead3cb" : "#cfe2ff" }}
        >
          {onDeselect ? "REMOVE" : "SELECT"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
