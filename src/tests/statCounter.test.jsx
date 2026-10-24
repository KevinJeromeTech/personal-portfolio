import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatCounter from "../components/StatCounter.jsx";
import projects from "../data/projects.js";

describe("StatCounter", () => {
  it("renders the real value before any scroll animation runs", () => {
    render(<StatCounter value={31} label="Tables" />);
    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });
});

describe("Project links", () => {
  it("never point to a placeholder '#'", () => {
    projects.forEach((p) => {
      expect(p.github).not.toBe("#");
      expect(p.demo).not.toBe("#");
    });
  });
});
