import "./Skills.styles.css";

const Skills = () => {
	return (
		<div className="skills">
			<h2 className="skills__title">Skills</h2>

			<ul className="skills__list">
				<li>
					HTML &nbsp;:&nbsp; CSS &nbsp;:&nbsp; JavaScript &nbsp;:&nbsp;
					TypeScript
				</li>
				<li>React &nbsp;:&nbsp; Redux &nbsp;:&nbsp; React-Router</li>
				<li>Material-UI &nbsp;:&nbsp; React-Hook-Form &nbsp;:&nbsp; Yup</li>
				<li>Sass &nbsp;:&nbsp; Styled-Components</li>

				<li>
					Firebase
					<ul className="skills__list__nested">
						<li>
							Authentication &nbsp;:&nbsp; Firestore &nbsp;:&nbsp; Cloud
							Functions
						</li>
						<li>Storage &nbsp;:&nbsp; Hosting &nbsp;:&nbsp; Emulators</li>
					</ul>
				</li>
				<li>Googling &nbsp;:&nbsp; Reading Documentations</li>
			</ul>
		</div>
	);
};

export default Skills;
