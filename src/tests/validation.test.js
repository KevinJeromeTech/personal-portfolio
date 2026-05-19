import { describe, it, expect } from "vitest";

function validateForm({ name, email, message }) {
  const errors = {};
  if (!name.trim() || name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (!message.trim() || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

describe("Contact form validation", () => {
  it("passes with valid input", () => {
    const errors = validateForm({ name: "Kevin", email: "k@example.com", message: "Hello there, this is a test message." });
    expect(errors).toEqual({});
  });

  it("fails with empty name", () => {
    const errors = validateForm({ name: "", email: "k@example.com", message: "Hello there, this is a test message." });
    expect(errors.name).toBeDefined();
  });

  it("fails with single-char name", () => {
    const errors = validateForm({ name: "K", email: "k@example.com", message: "Hello there, this is a test message." });
    expect(errors.name).toBeDefined();
  });

  it("fails with invalid email", () => {
    const errors = validateForm({ name: "Kevin", email: "not-an-email", message: "Hello there, this is a test message." });
    expect(errors.email).toBeDefined();
  });

  it("fails with short message", () => {
    const errors = validateForm({ name: "Kevin", email: "k@example.com", message: "Hi" });
    expect(errors.message).toBeDefined();
  });

  it("fails with all empty fields", () => {
    const errors = validateForm({ name: "", email: "", message: "" });
    expect(Object.keys(errors)).toHaveLength(3);
  });
});
