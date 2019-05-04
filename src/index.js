import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './App';
// import EssayForm from './compenent/from'
// import Clock from  './compenent/clock';
// import Calculator from './compenent/status_up'

// import ReactInherit from './compenent/inherit'


// 高级部分

// import JsxComponent from './highKnowledge/JSX'
import PropType from './highKnowledge/prop_type'
import CustomTextInput from './highKnowledge/refs'
ReactDOM.render(
	<CustomTextInput/>,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
