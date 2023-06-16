import { screen, render } from "@testing-library/react";
import VoteSub from "./";
import { expect } from "vitest";

describe("Checking VoteSub component", () => {
	test("render VoteSub component", () => {
		render(<VoteSub />);
		const votesub = document.querySelector(".votesub");
		expect(votesub).toBeInTheDocument();
	});

	test("has 'votesub' class", () => {
		const { container } = render(<VoteSub />);
		expect(container.firstChild).toHaveClass("votesub");
	});

	describe("Checking project info section", () => {
		test("section has 'votesub__info' class", () => {
			render(<VoteSub />);
			const section = document.querySelector("section");
			expect(section).toHaveClass("votesub__info");
		});

		test("title set to 'VoteSub↗'", () => {
			render(<VoteSub />);
			const titleEl = screen.getByRole("heading", { level: 3 });
			expect(titleEl.textContent).toBe("VoteSub↗");
		});

		test("has correct github link", () => {
			render(<VoteSub />);
			const titleEl = screen.getByRole("heading", { level: 3 })
				.firstChild as HTMLAnchorElement;
			expect(titleEl.href).toBe("https://github.com/kiranbansode/votesub");
		});

		test("link target set to '_blank'", () => {
			render(<VoteSub />);
			const linkEl = screen.getByRole("heading", { level: 3 })
				.firstChild as HTMLAnchorElement;
			expect(linkEl.target).toBe("_blank");
		});

		test("has correct working info", () => {
			render(<VoteSub />);
			const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
			expect(paragraphEl.textContent).toBe(
				"Full-Stack\u00A0 : \u00A0Self-EmployedOct 21-May 23"
			);
		});

		test("working section has 'votesub__work' class", () => {
			render(<VoteSub />);
			const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
			expect(paragraphEl).toHaveClass("votesub__work");
		});
	});

	describe("Checking work bullet points", () => {
		test("render points list", () => {
			render(<VoteSub />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toBeInTheDocument();
		});

		test("points list has 'votesub__list' class", () => {
			render(<VoteSub />);
			const ulEl = document.querySelector("ul");
			expect(ulEl).toHaveClass("votesub__list");
		});

		test("points list contain 6 list items", () => {
			render(<VoteSub />);
			const listItems = document.querySelector("ul")?.children;
			expect(listItems?.length).toBe(6);
		});

		test("1st list item has correct info", () => {
			render(<VoteSub />);
			const listItem1 = document.querySelector("ul")?.children.item(0);
			expect(listItem1?.textContent).toBe(
				"made initial wireframes using Draw.io and convert them to web designs using \u00A0Figma↗"
			);
		});

		test("2nd list item has correct info", () => {
			render(<VoteSub />);
			const listItem2 = document.querySelector("ul")?.children.item(1);
			expect(listItem2?.textContent).toBe(
				"track VoteSub\u2019s\u00A0SDLC\u00A0 progress using\u00A0Trello↗\u00A0 and followed\u00A0Agile Development\u00A0 methodology"
			);
		});

		test("3rd list item has correct info", () => {
			render(<VoteSub />);
			const listItem3 = document.querySelector("ul")?.children.item(2);
			expect(listItem3?.textContent).toBe(
				"built CI/CD pipeline to deploy latest changes from\u00A0GitHub to Firebase Hosting using GCP\u2019s Cloud Build and\u00A0Cloud Run\u00A0 and followed\u00A0Git Branching\u00A0 strategy to keep master branch safe"
			);
		});

		test("4th list item has correct info", () => {
			render(<VoteSub />);
			const listItem3 = document.querySelector("ul")?.children.item(3);
			expect(listItem3?.textContent).toBe(
				"created custom\u00A0React Components\u00A0using\u00A0Material-UI\u00A0 to support\u00A0React-Hook-Form,\u00A0yup validations, default props and custom CSS styles"
			);
		});
		test("5th list item has correct info", () => {
			render(<VoteSub />);
			const listItem3 = document.querySelector("ul")?.children.item(4);
			expect(listItem3?.textContent).toBe(
				"created custom\u00A0React Hooks\u00A0 to fetch real time data from\u00A0Firebase\u2019s Firestore\u00A0 database"
			);
		});
		test("6th list item has correct info", () => {
			render(<VoteSub />);
			const listItem3 = document.querySelector("ul")?.children.item(5);
			expect(listItem3?.textContent).toBe(
				"typesafe\u00A0important functions and React Components using\u00A0TypeScript\u00A0and add documentation using\u00A0JSDoc"
			);
		});
	});
});
