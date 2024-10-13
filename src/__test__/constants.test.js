import { MAX_SELECTED_EVENTS } from "../utils/constants";

describe("Constants", () => {
  test("MAX_SELECTED_EVENTS is defined", () => {
    expect(MAX_SELECTED_EVENTS).toBeDefined();
  });

  test("MAX_SELECTED_EVENTS is a number", () => {
    expect(typeof MAX_SELECTED_EVENTS).toBe("number");
  });

  test("MAX_SELECTED_EVENTS equals 3", () => {
    expect(MAX_SELECTED_EVENTS).toBe(3);
  });
});
