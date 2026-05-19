import { describe, it, expect } from "vitest";
import projects from "../data/projects.js";

describe("Projects data", () => {
  it("exports an array", () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it("each project has required fields", () => {
    projects.forEach((p) => {
      expect(p).toHaveProperty("id");
      expect(p).toHaveProperty("title");
      expect(p).toHaveProperty("description");
      expect(p).toHaveProperty("image");
      expect(p).toHaveProperty("stack");
      expect(Array.isArray(p.stack)).toBe(true);
    });
  });

  it("featured projects have highlights", () => {
    projects.filter((p) => p.featured).forEach((p) => {
      expect(p.highlights?.length).toBeGreaterThan(0);
    });
  });

  it("project IDs are unique", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
