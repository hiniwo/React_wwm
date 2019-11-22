import 'antd/dist/antd.css'
import React, { Component } from 'react';
import { Input , Button , List } from 'antd';
import store from '../store/index'

import {changeInputAction , addItemAction , deleteItemAction} from '../store/actionCreators'
class ToodList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态,关键代码
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} 
                        onChange={this.changeInputValue}
                        style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary" onClick={this.addList}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item , index)=>(
                        <List.Item onClick={this.deleteList.bind(this , index)}
                        >{item}
                        </List.Item>)}
                    />    
                </div>
            </div>
         );
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
    addList(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteList(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default ToodList;