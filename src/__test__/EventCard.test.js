import React from "react";
import { render, screen } from "@testing-library/react";
import EventCard from "../components/EventCard";
import { events as mockData } from "../data/mockData";

describe("EventCard Component", () => {
  test("disables the button when not selectable", () => {
    render(
      <EventCard
        event={mockData}
        onDeselect={() => {}}
        isSelectable={false}
        bgColor="white"
      />
    );

    const button = screen.getByRole("button", { name: /remove/i });
    expect(button).toBeDisabled();
  });

  test("enables the button when selectable", () => {
    render(
      <EventCard
        event={mockData}
        onSelect={() => {}}
        isSelectable={true}
        bgColor="white"
      />
    );

    const button = screen.getByRole("button", { name: /select/i });
    expect(button).toBeEnabled();
  });
});
