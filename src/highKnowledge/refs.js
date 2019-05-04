


// 下面是几个适合使用 refs 的情况：
// 处理焦点、文本选择或媒体控制。
// 触发强制动画。
// 集成第三方 DOM 库

//创建ref的方法
//使用React.createRef()这个方法
//使用函数会掉refs，把ref储存在类里面


// 注意要点
// 可以为 DOM 元素添加 Ref和类添加Ref,但是不能给函数式添加Ref
// 但是，你可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件

import React from 'react'

class CustomTextInput extends React.Component {
	constructor(props) {
		super(props);
		// 创建 ref 存储 textInput DOM 元素
		this.textInput = React.createRef();
		this.focusTextInput = this.focusTextInput.bind(this);
	}
	
	focusTextInput() {
		// 直接使用原生 API 使 text 输入框获得焦点
		// 注意：通过 "current" 取得 DOM 节点
		this.textInput.current.focus();
	}
	
	render() {
		// 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
		return (
			<div>
				<input
					type="text"
					ref={this.textInput} />
				
				
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focusTextInput}
				/>
			</div>
		);
	}
}

class AutoFocusTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}
	
	componentDidMount() {
		this.textInput.current.focusTextInput();
	}
	
	render() {
		return (
			<CustomTextInput ref={this.textInput} />
		);
	}
}

export default AutoFocusTextInput;