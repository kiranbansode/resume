import "./Education.styles.css";

const Education = () => {
	return (
		<div className="education">
			<h2 className="education__title">Education</h2>
			<ul className="education__list">
				<li>
					<span className="education__course">
						B.E. (Information Technology)
					</span>
					<br />
					<span className="education__institute">
						Vishwakarma Institute of Information Technology
					</span>
					<span className="education__status">
						<em>&nbsp;(~pursuing~)</em>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Education;
