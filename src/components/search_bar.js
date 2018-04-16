import React, { Component } from 'react';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = { term: ''};
	}
	
	//whenever we reference a javascript variable, wrap it with curly braces {this.state.term}
	render() {
		return ( 
			<div>
				<input 
					value={this.state.term}
					onChange = { event => this.setState( { term: event.target.value})} />
			</div>
		);
		//return <input onChange = {this.onInputChange} />;
	}
	
	//onInputChange(event) {
	//	event.persist();
	//	console.log(event.target.value);
	//}
}

export default SearchBar;