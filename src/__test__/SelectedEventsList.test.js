import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectedEventsList from "../components/SelectedEventsList.js";
import { events as mockData } from "../data/mockData";

describe("SelectedEventsList Component", () => {
  const mockDeselect = jest.fn();

  test("renders selected events correctly", () => {
    render(
      <SelectedEventsList
        selectedEvents={[mockData[0]]}
        onDeselect={mockDeselect}
      />
    );
    expect(screen.getByText(mockData[0].event_name)).toBeInTheDocument();
  });

  test("calls onDeselect when clicking remove button", () => {
    render(
      <SelectedEventsList
        selectedEvents={[mockData[0]]}
        onDeselect={mockDeselect}
      />
    );
    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);
    expect(mockDeselect).toHaveBeenCalledWith(mockData[0]);
  });
});
