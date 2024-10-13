import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventList from "../components/EventList";
import { events as mockData } from "../data/mockData";

describe("EventList Component", () => {
  const disabledEvents = [mockData[1].id];

  test("renders events correctly", () => {
    const handleSelect = jest.fn();
    render(
      <EventList
        events={mockData}
        onSelect={handleSelect}
        disabledEvents={disabledEvents}
      />
    );

    mockData.forEach((event) => {
      expect(screen.getByText(event.event_name)).toBeInTheDocument();
    });
  });

  test("disables specific events", () => {
    const disabledEvents = [mockData[1].id];
    const handleSelect = jest.fn();
    render(
      <EventList
        events={mockData}
        onSelect={handleSelect}
        disabledEvents={disabledEvents}
      />
    );

    const disabledEvent = screen.getByText(mockData[1].event_name);
    expect(disabledEvent).toBeInTheDocument();

    fireEvent.click(disabledEvent);
    expect(handleSelect).not.toHaveBeenCalledWith(mockData[1]);
  });
});
