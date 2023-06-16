import { screen, render } from "@testing-library/react";
import Tools from ".";
import { ReactElement } from "react";

describe("Checking Tools component", () => {
	test("render Tools component", () => {
		const { container } = render(<Tools />);
		expect(container.firstChild).toBeInTheDocument();
	});

	test("has 'tools' class", () => {
		const { container } = render(<Tools />);
		expect(container.firstChild).toHaveClass("tools");
	});

	describe("Checking title", () => {
		render(<Tools />);
		const titleEl = screen.getByRole("heading", { level: 2 });

		test("title set to 'Tools'", () => {
			expect(titleEl.textContent).toBe("Tools");
		});

		test("title contain 'tools__title' class", () => {
			expect(titleEl).toHaveClass("tools__title");
		});
	});

	describe("Checking un-ordered list", () => {
		test("render list", () => {
			render(<Tools />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toBeInTheDocument();
		});

		test("list contain 'tools_list' class", () => {
			render(<Tools />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toHaveClass("tools__list");
		});
	});

	describe("Checking list items", () => {
		test("has 3 list items", () => {
			render(<Tools />);
			const liEl = document.querySelectorAll("li");
			expect(liEl.length).toBe(3);
		});

		test("1st list content match", () => {
			render(<Tools />);
			const firstList = document.querySelectorAll("li").item(0);
			expect(firstList.textContent).toBe(
				"Vite \u00A0:\u00A0 CRA \u00A0:\u00A0 VSCode \u00A0:\u00A0 Git \u00A0:\u00A0 GitHub \u00A0:\u00A0 Node.js \u00A0:\u00A0 npm \u00A0:\u00A0 Yarn \u00A0:\u00A0 Jest \u00A0:\u00A0 Vitest \u00A0:\u00A0 React-Testing-Library"
			);
		});

		test("2nd list content match", () => {
			render(<Tools />);
			const firstList = document.querySelectorAll("li").item(1);
			expect(firstList.textContent).toBe(
				"ESLint \u00A0:\u00A0 Prettier \u00A0:\u00A0 Husky \u00A0:\u00A0 Lint-Staged \u00A0:\u00A0 Chrome \u00A0:\u00A0 DevTools \u00A0:\u00A0 Terminals"
			);
		});

		test("3rd list content match", () => {
			render(<Tools />);
			const firstList = document.querySelectorAll("li").item(2);
			expect(firstList.textContent).toBe(
				"Figma \u00A0:\u00A0 Draw.io \u00A0:\u00A0 Trello \u00A0:\u00A0 Jira"
			);
		});
	});
});
