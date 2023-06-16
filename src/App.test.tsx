import { screen, render } from "@testing-library/react";
import App from "./App";

describe("Checking App component", () => {
	test("render App component", () => {
		const { container } = render(<App />);
		expect(container.firstChild).toBeInTheDocument();
	});

	test("has 'app-root' class", () => {
		const { container } = render(<App />);
		expect(container.firstChild).toHaveClass("app-root");
	});

	test("has div with 'background__wrapper'", () => {
		const wrapperDiv = render(<App />).container.children.item(0);
		expect(wrapperDiv).toHaveClass("app-root");
	});

	test("render Intro component", () => {
		render(<App />);
		const intro = document.querySelector(".intro");
		expect(intro).toBeInTheDocument();
	});

	test("render Experiences component", () => {
		render(<App />);
		const experiences = document.querySelector(".experiences");
		expect(experiences).toBeInTheDocument();
	});

	test("render Skills component", () => {
		render(<App />);
		const skills = document.querySelector(".skills");
		expect(skills).toBeInTheDocument();
	});

	test("render Tools component", () => {
		render(<App />);
		const tools = document.querySelector(".tools");
		expect(tools).toBeInTheDocument();
	});

	test("render Courses component", () => {
		render(<App />);
		const courses = document.querySelector(".courses");
		expect(courses).toBeInTheDocument();
	});

	test("render Education component", () => {
		render(<App />);
		const education = document.querySelector(".education");
		expect(education).toBeInTheDocument();
	});

	test("render Contact component", () => {
		render(<App />);
		const contact = document.querySelector(".contact");
		expect(contact).toBeInTheDocument();
	});
});
