import { render, screen } from "@testing-library/react";
import Contact from "components/Contact";
import UserIcon from "assets/img/user-icon.png";
import PhoneIcon from "assets/img/phone-icon.png";
import LocationIcon from "assets/img/location-icon.png";
import EmailIcon from "assets/img/email-icon.png";
import GitHubIcon from "assets/img/github-icon.png";

describe("Checking Contact component", () => {
	test("renders Contact component", () => {
		render(<Contact />);
	});

	describe("Checking 'Contact' heading", () => {
		test("render 'Contact' as heading", () => {
			render(<Contact />);
			const titleEl = screen.getByRole("heading", { level: 2 });
			expect(titleEl).toBeInTheDocument();
		});

		test("'Contact' has a class 'contact__title'", () => {
			render(<Contact />);
			const titleEl = screen.getByRole("heading", { level: 2 });
			expect(titleEl).toHaveClass("contact__title");
		});
	});

	describe("Checking contacts list", () => {
		test("render contact lists", () => {
			render(<Contact />);
			const contactsList = document.querySelectorAll("p");
			expect(contactsList.length === 5).toBe(true);
		});

		describe("Checking Full Name", () => {
			test("check name has UserIcon img in front of it", () => {
				render(<Contact />);
				const userIconEl = screen.getByAltText("user-icon");
				expect(userIconEl).toHaveAttribute("src", UserIcon);
			});

			test("check name has 'contact__info' and 'contact__info__name' classes", () => {
				render(<Contact />);
				const fullNameEl = screen.getByText("Kiran Ashok Bansode");
				expect(fullNameEl.classList.contains("contact__info")).toBe(true);
				expect(fullNameEl.classList.contains("contact__info__name")).toBe(true);
			});

			test("render name", () => {
				render(<Contact />);
				const fullNameEl = screen.getByText("Kiran Ashok Bansode");
				expect(fullNameEl).toBeInTheDocument();
			});
		});

		describe("Checking main Contact", () => {
			test("render main contact", () => {
				const { container } = render(<Contact />);
				const mainContact = container.querySelector(".contact__info__contact1");
				expect(mainContact?.textContent).toBe("+91 92 8490 1028");
			});
			test("check main contact has PhoneIcon img in front of it", () => {
				render(<Contact />);
				const phoneIconEl = screen.getByAltText("phone-icon-main");
				expect(phoneIconEl).toHaveAttribute("src", PhoneIcon);
			});

			test("check main contact has 'contact__info' and 'contact__info__contact1' classes", () => {
				const { container } = render(<Contact />);
				const mainContact = container.querySelector(".contact__info__contact1");
				expect(mainContact?.classList.contains("contact__info")).toBe(true);
				expect(mainContact?.classList.contains("contact__info__contact1")).toBe(
					true
				);
			});
		});

		// describe("Checking alternate Contact", () => {
		// 	test("render alternate contact", () => {
		// 		const { container } = render(<Contact />);
		// 		const mainContact = container.querySelector(".contact__info__contact2");
		// 		expect(mainContact?.textContent).toBe("+91 84 4660 6292");
		// 	});

		// 	test("alternate contact has PhoneIcon img in front of it", () => {
		// 		render(<Contact />);
		// 		const phoneIconEl = screen.getByAltText("phone-icon-alternate");
		// 		expect(phoneIconEl).toHaveAttribute("src", PhoneIcon);
		// 	});

		// 	test("alternate contact has 'contact__info' and 'contact__info__contact2' classes", () => {
		// 		const { container } = render(<Contact />);
		// 		const mainContact = container.querySelector(".contact__info__contact2");
		// 		expect(mainContact?.classList.contains("contact__info")).toBe(true);
		// 		expect(mainContact?.classList.contains("contact__info__contact2")).toBe(
		// 			true
		// 		);
		// 	});
		// });

		describe("Checking Location", () => {
			test("render Location", () => {
				const { container } = render(<Contact />);
				const locationEl = container.querySelector(".contact__info__location");
				expect(locationEl?.textContent).toBe("Pune, INDIA");
			});

			test("location has LocationIcon img in front of it", () => {
				render(<Contact />);
				const locationIconEl = screen.getByAltText("location-icon");
				expect(locationIconEl).toHaveAttribute("src", LocationIcon);
			});

			test("location has 'contact__info' and 'contact__info__location' classes", () => {
				const { container } = render(<Contact />);
				const locationEl = container.querySelector(".contact__info__location");
				expect(locationEl?.classList.contains("contact__info")).toBe(true);
				expect(locationEl?.classList.contains("contact__info__location")).toBe(
					true
				);
			});
		});

		describe("Checking Email", () => {
			test("render Email", () => {
				const { container } = render(<Contact />);
				const emailEl = container.querySelector(".contact__info__email");
				expect(emailEl?.textContent).toBe("czar.kiran@gmail.com");
			});

			test("email has EmailIcon img in front of it", () => {
				render(<Contact />);
				const emailIconEl = screen.getByAltText("email-icon");
				expect(emailIconEl).toHaveAttribute("src", EmailIcon);
			});

			test("email has correct link", () => {
				const { container } = render(<Contact />);
				const linkEl = container.querySelector(".contact__info__email")
					?.firstChild as HTMLAnchorElement;
				expect(linkEl.href).toBe("mailto:czar.kiran@gmail.com");
			});

			test("email has 'contact__info' and 'contact__info__email' classes", () => {
				const { container } = render(<Contact />);
				const locationEl = container.querySelector(".contact__info__email");
				expect(locationEl?.classList.contains("contact__info")).toBe(true);
				expect(locationEl?.classList.contains("contact__info__email")).toBe(
					true
				);
			});
		});

		describe("Checking GitHub", () => {
			test("render GitHub", () => {
				const { container } = render(<Contact />);
				const emailEl = container.querySelector(".contact__info__github");
				expect(emailEl?.textContent).toBe("github.com/kiranbansode");
			});

			test("github has GitHubIcon img in front of it", () => {
				render(<Contact />);
				const githubIconEl = screen.getByAltText("github-icon");
				expect(githubIconEl).toHaveAttribute("src", GitHubIcon);
			});

			test("github has correct link", () => {
				const { container } = render(<Contact />);
				const linkEl = container.querySelector(".contact__info__github")
					?.firstChild as HTMLAnchorElement;
				expect(linkEl.href).toBe("https://github.com/kiranbansode");
			});

			test("github has 'contact__info' and 'contact__info__github' classes", () => {
				const { container } = render(<Contact />);
				const locationEl = container.querySelector(".contact__info__github");
				expect(locationEl?.classList.contains("contact__info")).toBe(true);
				expect(locationEl?.classList.contains("contact__info__github")).toBe(
					true
				);
			});
		});
	});
});
