import { render, screen } from "@testing-library/react";
import Page from "../app/devops/page"; // Adjust the import path if needed
import { describe, it, expect } from "vitest";

describe("Page Component", () => {
	it("renders the correct text", () => {
		render(<Page />);
		expect(screen.getByText("this must be test")).toBeInTheDocument();
	});
});
