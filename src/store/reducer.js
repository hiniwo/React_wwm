const defaultState = {
    inputValue : 'Write React',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时' ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    console.log(state,action)
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    return state
}