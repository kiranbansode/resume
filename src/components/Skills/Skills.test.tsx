import { render, screen } from "@testing-library/react";
import Skills from ".";

describe("Checking Skills component", () => {
	test("render Skills component", () => {
		const { container } = render(<Skills />);
		expect(container).toBeInTheDocument();
	});

	test("has 'Skills' as title", () => {
		render(<Skills />);
		const titleEl = screen.getByRole("heading", { level: 2 });
		expect(titleEl.textContent).toBe("Skills");
	});

	test("title contain 'skills__title' class ", () => {
		render(<Skills />);
		const titleEl = screen.getByRole("heading", { level: 2 }) as HTMLElement;
		expect(titleEl).toHaveClass("skills__title");
	});

	describe("Checking main un-ordered list", () => {
		test('list contain "skills__list" class', () => {
			render(<Skills />);
			// querySelector() return only first matching el and ignore others
			const ulEl = document.querySelector("ul");
			expect(ulEl).toHaveClass("skills__list");
		});

		test("has 6 list items", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.length).toBe(6);
		});

		test("1st main list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.item(0)?.textContent).toBe(
				"HTML \u00A0:\u00A0 CSS \u00A0:\u00A0 JavaScript \u00A0:\u00A0 TypeScript"
			);
		});

		test("2nd main list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.item(1)?.textContent).toBe(
				"React \u00A0:\u00A0 Redux \u00A0:\u00A0 React-Router"
			);
		});

		test("3rd main list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.item(2)?.textContent).toBe(
				"Material-UI \u00A0:\u00A0 React-Hook-Form \u00A0:\u00A0 Yup"
			);
		});

		test("4th main list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.item(3)?.textContent).toBe(
				"Sass \u00A0:\u00A0 Styled-Components"
			);
		});

		test("5th main list match", () => {
			render(<Skills />);
			const firebaseList = screen.getByText((element, _) =>
				element.startsWith("Firebase")
			);
			expect(firebaseList).toBeInTheDocument();
		});

		test("6th main list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list")?.children;
			expect(ulEl?.item(5)?.textContent).toBe(
				"Googling \u00A0:\u00A0 Reading Documentations"
			);
		});
	});

	describe("Checking Firebase's nested un-ordered list ", () => {
		test('list contain "skills__list__nested" class', () => {
			render(<Skills />);
			// querySelector() return only first matching el and ignore others
			const ulEl = document.querySelectorAll("ul").item(1);
			expect(ulEl).toHaveClass("skills__list__nested");
		});

		test("has 2 list items", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list__nested")?.children;
			expect(ulEl?.length).toBe(2);
		});

		test("1st nested list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list__nested")?.children;
			expect(ulEl?.item(0)?.textContent).toBe(
				"Authentication \u00A0:\u00A0 Firestore \u00A0:\u00A0 Cloud Functions"
			);
		});

		test("2nd nested list match", () => {
			render(<Skills />);
			const ulEl = document.querySelector(".skills__list__nested")?.children;
			expect(ulEl?.item(1)?.textContent).toBe(
				"Storage \u00A0:\u00A0 Hosting \u00A0:\u00A0 Emulators"
			);
		});
	});
});
