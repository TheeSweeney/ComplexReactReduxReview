import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

import config from './config.js';

const API_KEY = config.key;

//Create a new component - should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take component's generated HTML and put it on the page/in DOM
ReactDOM.render(<App />, document.querySelector('.container'));