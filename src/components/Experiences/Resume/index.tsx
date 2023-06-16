import "./Resume.style.css";

const Resume = () => {
	return (
		<div className="resume" id="project-resume">
			<section className="resume__info">
				<h3>
					<a href="https://github.com/kiranbansode/resume" target="_blank">
						Kiran's Resume↗
					</a>
				</h3>

				<p className="resume__work">
					<span>Frontend&nbsp;</span> : <span>&nbsp;Self-Employed</span>
					<span>Feb 23-June 23</span>
				</p>
			</section>

			<ul className="resume__list">
				<li>
					created a <strong> Responsive User Experience </strong>
					website with
					<strong> CSS Flexbox </strong>
					and
					<strong> CSS Grid </strong>
					that allowed cross-platform accessibility to website on any device
					with primarily
					<strong> mobile first approach</strong>
				</li>
				<li>
					learned and implemented
					<strong> Test Driven Development (TDD) </strong>
					with
					<strong> Jest </strong>
					and
					<strong> React-Testing-Library</strong>
				</li>
				<li>
					learned and implemented
					<strong> CSS BEM </strong>
					methodology to improve code
					<strong> readability, maintainability and scalability</strong>
				</li>
			</ul>
		</div>
	);
};

export default Resume;
