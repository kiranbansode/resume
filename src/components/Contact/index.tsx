import UserIcon from "assets/img/user-icon.png";
import PhoneIcon from "assets/img/phone-icon.png";
import LocationIcon from "assets/img/location-icon.png";
import EmailIcon from "assets/img/email-icon.png";
import GitHubIcon from "assets/img/github-icon.png";

import "./Contact.styles.css";

const Contact = () => {
	return (
		<div className="contact">
			<h2 className="contact__title">Contact</h2>

			<p className="contact__wrapper">
				<span className="contact__icon">
					<img src={UserIcon} alt="user-icon" />
				</span>
				<span className="contact__info contact__info__name">
					Kiran Ashok Bansode
				</span>
			</p>

			<p className="contact__wrapper">
				<span className="contact__icon">
					<img src={PhoneIcon} alt="phone-icon-main" />
				</span>

				<span className="contact__info contact__info__contact1">
					<a href="tel:+91-92849-01028">
						+91
						<span className="contact__info__important"> 92 8490 1028</span>
					</a>
				</span>
			</p>

			{/* <p className="contact__wrapper">
				<span className="contact__icon">
					<img src={PhoneIcon} alt="phone-icon-alternate" />
				</span>
				<span className="contact__info contact__info__contact2">
					<a href="tel:+91-84466-06292">
						+91
						<span className="contact__info__important"> 84 4660 6292</span>
					</a>
				</span>
			</p> */}

			<p className="contact__wrapper">
				<span className="contact__icon">
					<img src={LocationIcon} alt="location-icon" />
				</span>
				<span className="contact__info contact__info__location">
					<span className="contact__info__important">Pune</span>, INDIA
				</span>
			</p>

			<p className="contact__wrapper">
				<span className="contact__icon">
					<img src={EmailIcon} alt="email-icon" />
				</span>
				<span className="contact__info contact__info__email">
					<a
						href="mailto:czar.kiran@gmail.com"
						className="contact__info contact__info__email"
					>
						<span className="contact__info__important">czar.kiran</span>
						@gmail.com
					</a>
				</span>
			</p>

			<p className="contact__wrapper">
				<span className="contact__icon">
					<img src={GitHubIcon} alt="github-icon" />
				</span>
				<span className="contact__info contact__info__github">
					<a href="https://github.com/kiranbansode" target="_blank">
						github.com/
						<span className="contact__info__important">kiranbansode</span>
					</a>
				</span>
			</p>
		</div>
	);
};

export default Contact;
