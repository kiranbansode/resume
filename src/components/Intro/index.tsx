import ProfilePicture from "assets/img/profile.jpg";

import "./Intro.styles.css";

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro__photo">
				<img src={ProfilePicture} alt="Kiran's Profile Picture" />
			</div>

			<h1 className="intro__name">Kiran Bansode</h1>
			{/* <h3 className="intro__pronunciation">kee-run bun-so-day</h3> */}

			<p className="intro__post">Full-Stack Web Developer</p>

			<p className="intro__about">
				<span>Hi,</span> I’m Kiran, a Full-Stack Web Developer
				<span>(self-taught)</span> with 1.5 years of experience building
				websites & applications using modern technologies like &nbsp;
				<span>React,</span>&nbsp;<span>Redux,</span>&nbsp;
				<span>Firebase,</span>&nbsp;<span>Material-UI,</span>&nbsp;
				<span>SASS,</span>&nbsp;<span>Styled-Components,</span>&nbsp;
				<span>TypeScript</span> and many more…
			</p>
		</div>
	);
};

export default Intro;
