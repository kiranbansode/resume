import "./Courses.styles.css";

const Courses = () => {
	return (
		<div className="courses">
			<h2 className="courses__title">Courses</h2>

			<ul className="courses__list">
				<li>
					<a href="https://github.com/kiranbansode/learn-react" target="_blank">
						React - The Complete Guide(incl. React Router & Redux)
					</a>
				</li>
				<li>
					<a
						href="https://github.com/kiranbansode/learn-typescript"
						target="_blank"
					>
						Mastering TypeScript
					</a>
				</li>
				<li>
					<a
						href="https://github.com/kiranbansode/learn-nodejs"
						target="_blank"
					>
						NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Courses;
