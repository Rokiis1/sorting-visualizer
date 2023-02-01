/* eslint-disable linebreak-style */
import React from 'react';
import Body from './layouts/Body';
import Navigation from './layouts/Navigation';


const App: React.FC = () => {
	return (
		<>
			<main className="grid grid-rows-6 bg-gray-900 w-screen h-screen font-sans">
				<Navigation />
				<Body />
			</main>
		</>
	);
};

export default App;
