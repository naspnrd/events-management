import React from "react";
import EventCard from "./EventCard";

const SelectedEventsList = ({ selectedEvents, onDeselect }) => {
  return (
    <div className="selected-events-list">
      {selectedEvents.map((event) => (
        <EventCard
          event={event}
          onDeselect={onDeselect}
          isSelectable={true}
          bgColor={"#ebd2ce"}
          key={event.id}
        />
      ))}
    </div>
  );
};

export default SelectedEventsList;
