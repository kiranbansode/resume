import { render, screen } from "@testing-library/react";
import Intro from "./";
import ProfilePicture from "assets/img/profile.jpg";

describe("Checking Intro component", () => {
	test("render Intro component", () => {
		render(<Intro />);
	});

	test("img has correct src attribute", () => {
		render(<Intro />);
		const profilePhoto = screen.getByAltText("Kiran's Profile Picture");
		expect(profilePhoto).toHaveAttribute("src", ProfilePicture);
	});

	test("render 'Kiran Bansode'", () => {
		render(<Intro />);
		const nameEl = screen.getByText("Kiran Bansode", { selector: "h1" });
		expect(nameEl).toBeInTheDocument();
	});

	test("render 'Full-Stack Web Developer' as post", () => {
		render(<Intro />);
		const postEl = screen.getByText("Full-Stack Web Developer", {
			selector: "p",
		});
		expect(postEl).toBeInTheDocument();
	});

	test("post has 'intro_post' class", () => {
		render(<Intro />);
		const postEl = screen.getByText("Full-Stack Web Developer", {
			selector: "p",
		});

		expect(postEl).toHaveClass("intro__post");
	});

	describe("Checking about section", () => {
		test("render about section", () => {
			const { container } = render(<Intro />);
			const aboutSection = container.querySelectorAll("p").item(1);
			expect(aboutSection.textContent?.startsWith("Hi,")).toBe(true);
		});

		test("has 'intro__about' class", () => {
			const { container } = render(<Intro />);
			const aboutSection = container.querySelectorAll("p").item(1);
			expect(aboutSection).toHaveClass("intro__about");
		});

		test("has correct description", () => {
			const { container } = render(<Intro />);
			const aboutSection = container.querySelectorAll("p").item(1);
			expect(aboutSection.textContent).toBe(
				"Hi, I\u2019m Kiran, a Full-Stack Web Developer(self-taught) with 1.5 years of experience building websites & applications using modern technologies like \u00A0React,\u00A0Redux,\u00A0Firebase,\u00A0Material-UI,\u00A0SASS,\u00A0Styled-Components,\u00A0TypeScript and many more…"
			);
		});
	});
});
