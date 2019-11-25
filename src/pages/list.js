import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }
    render() { 
        return (  
            <div>
                <h2>List Page</h2>
                <h2>{this.state.id}</h2>
            </div>
         );
    }
    componentDidMount(){
        let tempId=this.props.match.params.id
        this.setState({id:tempId })
    }
}
 
export default List;