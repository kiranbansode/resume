import "./VoteSub.style.css";

const VoteSub = () => {
	return (
		<div className="votesub" id="project-votesub">
			<section className="votesub__info">
				<h3 className="votesub__name">
					<a href="https://github.com/kiranbansode/votesub" target="_blank">
						VoteSub↗
					</a>
				</h3>

				<p className="votesub__work">
					<span>Full-Stack&nbsp;</span> : <span>&nbsp;Self-Employed</span>
					<span>Oct 21-Present</span>
				</p>
			</section>

			<ul className="votesub__list">
				<li>
					made initial <strong>wireframes</strong> using Draw.io and convert
					them to <strong>web designs</strong> using &nbsp;
					<a
						href="https://www.figma.com/file/ibh6SGKzcY9jgaTqusZy7b/VoteSub?node-id=0%3A1&t=in855W6Sjddmf7hM-1"
						target="_blank"
					>
						Figma↗
					</a>
				</li>

				<li>
					track VoteSub’s&nbsp;
					<strong>SDLC</strong>&nbsp; progress using&nbsp;
					<a href="https://trello.com/b/dPmDCweY" target="_blank">
						Trello↗
					</a>
					&nbsp; and followed&nbsp;
					<strong>Agile Development</strong>&nbsp; methodology
				</li>

				<li>
					built <strong>CI/CD pipeline</strong> to deploy latest changes
					from&nbsp;
					<strong>GitHub</strong> to <strong>Firebase Hosting</strong> using
					GCP’s <strong>Cloud Build</strong> and&nbsp;
					<strong>Cloud Run</strong>
					&nbsp; and followed&nbsp;
					<strong>Git Branching</strong>&nbsp; strategy to keep master branch
					safe
				</li>

				<li>
					created custom&nbsp;
					<strong>React Components</strong>&nbsp;using&nbsp;
					<strong>Material-UI</strong>&nbsp; to support&nbsp;
					<strong>React-Hook-Form</strong>,&nbsp;
					<strong>yup validations</strong>, default props and custom CSS styles
				</li>

				<li>
					created custom&nbsp;
					<strong>React Hooks</strong>&nbsp; to fetch real time data from&nbsp;
					<strong>Firebase’s Firestore</strong>&nbsp; database
				</li>

				<li>
					<strong>typesafe</strong>&nbsp;important functions and React
					Components using&nbsp;
					<strong>TypeScript</strong>&nbsp;and add documentation using&nbsp;
					<strong>JSDoc</strong>
				</li>
			</ul>
		</div>
	);
};

export default VoteSub;
