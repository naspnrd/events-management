import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EventSelection from "../components/EventSelection";
import { events as mockData } from "../data/mockData";

describe("EventSelection Component", () => {
  beforeEach(async () => {
    render(<EventSelection />);
  });

  test("selects an event when under selection limit", async () => {
    await waitFor(() =>
      expect(screen.getByTestId("events-section")).toBeInTheDocument()
    );

    const selectButton = screen.getByTestId(`select-button-${mockData[0].id}`);
    fireEvent.click(selectButton);

    expect(screen.getByTestId("selected-events-section")).toContainElement(
      screen.getByText(mockData[0].event_name)
    );
  });

  test("does not select more than 3 events", () => {
    mockData.slice(0, 3).forEach((event) => {
      const selectButton = screen.getByTestId(`select-button-${event.id}`);
      fireEvent.click(selectButton);
    });

    const fourthSelectButton = screen.getByTestId(
      `select-button-${mockData[3].id}`
    );
    fireEvent.click(fourthSelectButton);

    expect(screen.getByTestId("selected-events-section")).not.toContainElement(
      screen.getByText(mockData[3].event_name)
    );
  });

  test("deselects an event correctly", async () => {
    const selectButton = screen.getByTestId(`select-button-${mockData[0].id}`);
    fireEvent.click(selectButton);

    expect(screen.getByTestId("selected-events-section")).toContainElement(
      screen.getByText(mockData[0].event_name)
    );

    const deselectButton = screen.getByTestId(
      `select-button-${mockData[0].id}`
    );
    fireEvent.click(deselectButton);

    await waitFor(() => {
      const eventsSection = screen.getByTestId("selected-events-section");
      expect(eventsSection).not.toContainElement(
        screen.queryByText(mockData[0].event_name)
      );
    });
  });

  test("does not allow selecting conflicting events", () => {
    fireEvent.click(screen.getByTestId(`select-button-${mockData[0].id}`));

    fireEvent.click(screen.getByTestId(`select-button-${mockData[1].id}`));

    expect(screen.getByTestId("selected-events-section")).not.toContainElement(
      screen.getByText(mockData[1].event_name)
    );
  });
});
