import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAIfZ6fN34J9LHwkcDZpL_1Qaax5YpKC0I';

// create a new component. this component
// should produce some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);	//<- JSX; subset of JS
};

// take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));