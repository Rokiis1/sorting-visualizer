/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AlgoContext from './context/AlgoContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AlgoContext>
			<App />
		</AlgoContext>
	</React.StrictMode>
);
