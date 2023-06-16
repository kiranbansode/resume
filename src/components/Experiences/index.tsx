import VoteSub from './VoteSub';
import Resume from './Resume';

import './Experiences.styles.css';

const Experiences = () => {
	return (
		<div className="experiences">
			<h2 className="experiences__title">Work Experiences</h2>
			<VoteSub />
			<Resume />
		</div>
	);
};

export default Experiences;
