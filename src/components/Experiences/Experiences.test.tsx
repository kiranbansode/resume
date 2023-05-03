import { render, screen } from "@testing-library/react";
import Experiences from ".";

describe("Checking Experiences component", () => {
	test("render component", () => {
		const { container } = render(<Experiences />);
		expect(container.firstChild).toBeInTheDocument();
	});

	test("component has 'experiences' class", () => {
		const { container } = render(<Experiences />);
		expect(container.firstChild).toHaveClass("experiences");
	});

	test("title set to 'Work Experiences'", () => {
		render(<Experiences />);
		const titleEl = screen.getByRole("heading", { level: 2 });
		expect(titleEl.textContent).toBe("Work Experiences");
	});

	test("title has 'experiences__title' class", () => {
		render(<Experiences />);
		const titleEl = screen.getByRole("heading", { level: 2 });
		expect(titleEl).toHaveClass("experiences__title");
	});

	test("has VoteSub component", () => {
		render(<Experiences />);
		const votesub = document.querySelector(".votesub");
		expect(votesub).toBeInTheDocument();
	});

	test("has Resume component", () => {
		render(<Experiences />);
		const resume = document.querySelector(".resume");
		expect(resume).toBeInTheDocument();
	});
});
