import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component - should produce some HTML
const App = () => {
	return <div> Hi! </div>;
}

//Take component's generated HTML and put it on the page/in DOM
ReactDOM.render(<App />, document.querySelector('.container'));