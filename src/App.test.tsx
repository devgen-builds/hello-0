import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows the project name and ticker", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Hello DEVGEN" })).toBeInTheDocument();
    expect(screen.getByText("$HELLO")).toBeInTheDocument();
  });

  it("shows a plan with three milestones, each with a valid status", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 2, name: "Plan" })).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    for (const item of items) {
      const hasStatus = ["Done", "In progress", "Planned"].some(
        (s) => within(item).queryByText(s) !== null,
      );
      expect(hasStatus).toBe(true);
    }
  });
});
