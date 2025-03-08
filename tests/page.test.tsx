import React from "react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"; // Enables custom matchers like toBeInTheDocument
import { render, screen } from "@testing-library/react";

describe("Page Component", () => {
  it("renders the correct text", () => {
    render(<div>t</div>); // Render the component
    expect(screen.getByText("t")).toBeInTheDocument(); // Check if the text is in the DOM
  });
});
