import { screen, render } from "@testing-library/react";
import Resume from "./";
import { expect } from "vitest";

describe("Checking Resume component", () => {
	test("render Resume component", () => {
		render(<Resume />);
		const resume = document.querySelector(".resume");
		expect(resume).toBeInTheDocument();
	});

	test("has 'resume' class", () => {
		const { container } = render(<Resume />);
		expect(container.firstChild).toHaveClass("resume");
	});

	describe("Checking project info section", () => {
		test("section has 'resume__info' class", () => {
			render(<Resume />);
			const section = document.querySelector("section");
			expect(section).toHaveClass("resume__info");
		});

		test("title set to 'Kiran's Resume↗'", () => {
			render(<Resume />);
			const titleEl = screen.getByRole("heading", { level: 3 });
			expect(titleEl.textContent).toBe("Kiran's Resume↗");
		});

		test("has correct github link", () => {
			render(<Resume />);
			const titleEl = screen.getByRole("heading", { level: 3 })
				.firstChild as HTMLAnchorElement;
			expect(titleEl.href).toBe("https://github.com/kiranbansode/resume");
		});

		test("link target set to '_blank'", () => {
			render(<Resume />);
			const linkEl = screen.getByRole("heading", { level: 3 })
				.firstChild as HTMLAnchorElement;
			expect(linkEl.target).toBe("_blank");
		});

		test("has correct working info", () => {
			render(<Resume />);
			const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
			expect(paragraphEl.textContent).toBe(
				"Frontend\u00A0 : \u00A0Self-EmployedFeb 23-June 23"
			);
		});

		test("working section has 'resume__work' class", () => {
			render(<Resume />);
			const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
			expect(paragraphEl).toHaveClass("resume__work");
		});
	});

	describe("Checking work bullet points", () => {
		test("render points list", () => {
			render(<Resume />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toBeInTheDocument();
		});

		test("points list has 'resume__list' class", () => {
			render(<Resume />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toHaveClass("resume__list");
		});

		test("points list contain 3 list items", () => {
			render(<Resume />);
			const listItems = document.querySelector("ul")?.children;
			expect(listItems?.length).toBe(3);
		});

		test("1st list item has correct info", () => {
			render(<Resume />);
			const listItem1 = document.querySelector("ul")?.children.item(0);
			expect(listItem1?.textContent).toBe(
				"created a  Responsive User Experience website with CSS Flexbox and CSS Grid that allowed cross-platform accessibility to website on any device with primarily mobile first approach"
			);
		});

		test("2nd list item has correct info", () => {
			render(<Resume />);
			const listItem2 = document.querySelector("ul")?.children.item(1);
			expect(listItem2?.textContent).toBe(
				"learned and implemented Test Driven Development (TDD) with Jest and React-Testing-Library"
			);
		});

		test("3rd list item has correct info", () => {
			render(<Resume />);
			const listItem3 = document.querySelector("ul")?.children.item(2);
			expect(listItem3?.textContent).toBe(
				"learned and implemented CSS BEM methodology to improve code readability, maintainability and scalability"
			);
		});
	});
});
