import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Saras" />;
// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );


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

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
