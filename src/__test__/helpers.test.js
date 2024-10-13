import { formatTime } from "../utils/helpers";

describe("formatTime", () => {
  test("formats valid date strings correctly", () => {
    expect(formatTime("2022-12-17T13:00:00Z")).toBe("6:30 PM");
    expect(formatTime("2022-12-17T03:30:00Z")).toBe("9 AM");
  });

  test("returns empty string for invalid date strings", () => {
    expect(formatTime("invalid-date")).toBe("");
  });
});
