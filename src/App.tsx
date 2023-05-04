import Intro from './components/Intro';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Education from './components/Education';
import Tools from './components/Tools';

import './App.css';

function App() {
	return (
		<div className="app-root">
			<div className="background__wrapper"></div>
			<Intro />
			<Experiences />
			<Skills />
			<Tools />
			<Courses />
			<Education />
			<Contact />
		</div>
	);
}

export default App;
