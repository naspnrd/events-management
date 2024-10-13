import React from "react";
import { formatTime } from "../utils/helpers";

const EventCard = ({ event, onSelect, onDeselect, isSelectable, bgColor }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(event);
    } else if (onDeselect) {
      onDeselect(event);
    }
  };

  // Validating event data and providing fallbacks
  const eventName = event?.event_name || "Unknown Event";
  const eventCategory = event?.event_category || "Uncategorized";
  const startTime = event?.start_time ? formatTime(event.start_time) : "N/A";
  const endTime = event?.end_time ? formatTime(event.end_time) : "N/A";

  return (
    <div className={`event-card ${isSelectable ? "" : "disabled"}`}>
      <div
        className="event-category"
        aria-label={`Event category: ${eventCategory}`}
      >
        {eventCategory.charAt(0).toUpperCase()}
      </div>
      <hr className="event-separator" />
      <div className="event-details">
        <h3 className="event-name" id={`event-name-${event?.id || "unknown"}`}>
          {eventName}
        </h3>
        <div
          className="event-category-name"
          aria-label={`Event category: ${eventCategory}`}
        >
          {eventCategory}
        </div>
        <div
          className="event-timing"
          aria-label={`Event time: from ${startTime} to ${endTime}`}
        >
          {startTime} - {endTime}
        </div>
        <button
          onClick={handleClick}
          disabled={!isSelectable}
          style={{ backgroundColor: bgColor }}
          data-testid={`select-button-${event.id}`}
          aria-label={
            onDeselect
              ? `Remove ${event.event_name}`
              : `Select ${event.event_name}`
          }
          tabIndex={0}
        >
          {onDeselect ? "REMOVE" : "SELECT"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
