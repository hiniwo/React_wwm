import React from 'react';
const MyComponents = {
	DatePicker: function DatePicker(props) {
		return <div>Imagine a {props.color} datepicker here.</div>;
	}
}

function BlueDatePicker() {
	return <MyComponents.DatePicker color="blue" />;
}

class JxsComponent extends React.Component{
	constructor(props) {
		super(props);
		console.log(props.childrens)
	}
	
	render() {
		return (
			<div>
				<BlueDatePicker/>
			</div>
		);
	}
}

export default JxsComponent