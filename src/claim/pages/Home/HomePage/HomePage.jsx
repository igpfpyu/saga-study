import React from 'react';
import {connect} from 'react-redux';
import * as HomePageActive from './HomePage_action';
import {Button} from 'antd';
class HomePage extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <Button onClick={()=>this.itemClick()}>点击</Button>
                <div>{this.props.item}</div>
            </div>
        )
    }
    itemClick(){
        console.log(this.props);
        this.props.itemClick();
    }
}
export default connect(state=>{
    return state.HomePageReducer
}, HomePageActive)(HomePage);
