import { screen, render } from "@testing-library/react";
import Education from ".";

describe("Checking 'Education' component", () => {
	test("render Education component", () => {
		render(<Education />);
	});

	describe("Checking Education title", () => {
		render(<Education />);
		const titleEl = screen.getByRole("heading", { level: 2 });

		test("title is set to 'Education'", () => {
			expect(titleEl.textContent).toBe("Education");
		});

		test("title contains 'education__title' class", () => {
			// expect(titleEl.className).toBe("education__title");
			expect(titleEl).toHaveClass("education__title");
		});
	});

	describe("Checking un-ordered list", () => {
		test("has a un-ordered list", () => {
			render(<Education />);
			const ulEl = document.querySelector("ul") as HTMLElement;
			expect(ulEl).toBeInTheDocument();
		});

		test("contains 'education__list' class", () => {
			render(<Education />);
			const ulEl = document.querySelector("ul") as HTMLElement;
			expect(ulEl).toHaveClass("education__list");
		});

		describe("Checking list item", () => {
			test("has only 1 list item", () => {
				render(<Education />);
				const listEl = document.querySelectorAll("li");
				expect(listEl.length).toBe(1);
			});

			test("list has 2 span elements", () => {
				render(<Education />);
				const spanLists = document.querySelectorAll("span");
				expect(spanLists.length).toBe(2);
			});

			describe("Degree", () => {
				render(<Education />);
				const spanLists = document.querySelectorAll("span");
				const degreeEl = spanLists.item(0);

				test("has 'education__course' class", () => {
					expect(degreeEl).toHaveClass("education__course");
				});

				test("match course name", () => {
					expect(degreeEl.textContent).toBe("B.E. (Information Technology)*");
				});
			});

			describe("College", () => {
				render(<Education />);
				const spanLists = document.querySelectorAll("span");
				const collegeEl = spanLists.item(1);

				test("has 'education__institute' class", () => {
					expect(collegeEl).toHaveClass("education__institute");
				});

				test("match course name", () => {
					expect(collegeEl.textContent).toBe(
						"Vishwakarma Institute of Information Technology"
					);
				});
			});

			/*describe("Status", () => {
				render(<Education />);
				const spanLists = document.querySelectorAll("span");
				const statusEl = spanLists.item(2);

				test("has 'education__status' class", () => {
					expect(statusEl).toHaveClass("education__status");
				});

				test("match course name", () => {
					expect(statusEl.textContent).toBe("\u00A0(~pursuing~)");
				});
			});*/
		});
	});
});
