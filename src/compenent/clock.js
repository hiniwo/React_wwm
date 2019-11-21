import React from 'react';
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			isToggleOn : true
			
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	
	
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h1>React,project</h1>
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock