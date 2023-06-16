import { screen, render } from "@testing-library/react";
import Courses from ".";

describe("Checking Courses component", () => {
	test("render Courses component", () => {
		render(<Courses />);
	});

	test("render 'Courses' as title", () => {
		render(<Courses />);
		const titleEl = screen.getByRole("heading", { level: 2 });
		expect(titleEl.textContent).toBe("Courses");
	});

	test("title 'Courses' has 'courses__title' class", () => {
		render(<Courses />);
		const titleEl = screen.getByRole("heading", { level: 2 });
		expect(titleEl.className).toBe("courses__title");
	});

	describe("Checking un-ordered list", () => {
		test("'Courses' component has a un-ordered list", () => {
			render(<Courses />);
			const ulEl = document.querySelector("ul") as HTMLElement;
			expect(ulEl).toBeInTheDocument();
		});

		test("un-ordered list contains 'courses__list' class", () => {
			render(<Courses />);
			const ulEl = document.querySelector("ul") as HTMLElement;
			expect(ulEl.className).toBe("courses__list");
		});
	});

	describe("Checking courses list", () => {
		test("contains 3 courses", () => {
			render(<Courses />);
			const listsEl = document.querySelectorAll("li");
			expect(listsEl.length).toBe(3);
		});

		describe("React has", () => {
			render(<Courses />);
			const reactCourse = document.querySelectorAll("li").item(0);
			const linkToReactCourse = reactCourse.firstChild as HTMLAnchorElement;

			test("valid link to gitHub", () => {
				expect(linkToReactCourse.href).toBe(
					"https://github.com/kiranbansode/learn-react"
				);
			});

			test("target set to '_blank'", () => {
				expect(linkToReactCourse.target).toBe("_blank");
			});

			test("correct Course name", () => {
				expect(linkToReactCourse.textContent).toBe(
					"React - The Complete Guide(incl. React Router & Redux)"
				);
			});
		});

		describe("TypeScript has", () => {
			render(<Courses />);
			const typeScriptCourse = document.querySelectorAll("li").item(1);
			const linkToReactCourse =
				typeScriptCourse.firstChild as HTMLAnchorElement;

			test("valid link to gitHub", () => {
				expect(linkToReactCourse.href).toBe(
					"https://github.com/kiranbansode/learn-typescript"
				);
			});

			test("target set to '_blank'", () => {
				expect(linkToReactCourse.target).toBe("_blank");
			});

			test("correct Course name", () => {
				expect(linkToReactCourse.textContent).toBe("Mastering TypeScript");
			});
		});

		describe("Nodejs has", () => {
			render(<Courses />);
			const typeScriptCourse = document.querySelectorAll("li").item(2);
			const linkToReactCourse =
				typeScriptCourse.firstChild as HTMLAnchorElement;

			test("valid link to gitHub", () => {
				expect(linkToReactCourse.href).toBe(
					"https://github.com/kiranbansode/learn-nodejs"
				);
			});

			test("target set to '_blank'", () => {
				expect(linkToReactCourse.target).toBe("_blank");
			});

			test("correct Course name", () => {
				expect(linkToReactCourse.textContent).toBe(
					"NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)"
				);
			});
		});
	});
});
