import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

import config from './config.js';

const API_KEY = config.key;

YTSearch({key: API_KEY, term: 'complex magazine'}, function(data){
	console.log(data)
})

class App extends Component {
	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));