import './Tools.styles.css';

const Tools = () => {
	return (
		<div className="tools">
			<h2 className="tools__title">Tools</h2>
			<ul className="tools__list">
				<li>
					Vite &nbsp;:&nbsp; CRA &nbsp;:&nbsp; VSCode &nbsp;:&nbsp; Git
					&nbsp;:&nbsp; GitHub &nbsp;:&nbsp; Node.js &nbsp;:&nbsp; npm
					&nbsp;:&nbsp; Yarn &nbsp;:&nbsp; Jest &nbsp;:&nbsp; Vitest
					&nbsp;:&nbsp; React-Testing-Library
				</li>
				<li>
					ESLint &nbsp;:&nbsp; Prettier &nbsp;:&nbsp; Husky &nbsp;:&nbsp;
					Lint-Staged &nbsp;:&nbsp; Chrome &nbsp;:&nbsp; DevTools &nbsp;:&nbsp;
					Terminals
				</li>
				<li>
					Figma &nbsp;:&nbsp; Draw.io &nbsp;:&nbsp; Trello &nbsp;:&nbsp; Jira
				</li>
			</ul>
		</div>
	);
};

export default Tools;
