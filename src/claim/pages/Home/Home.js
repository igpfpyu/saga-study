import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
import './Home_css.less';
class Home extends React.Component{
    render(){
        return (
            <div>Home</div>
        )
    }
    itemClick(){
        let params=[
            {name:"a"},
            {name:"b"},
            {name:"c"},
            {name:"d"},
            {name:"e"}
        ]
        this.props.fetchStarWarsRequest(params)
    }
    planetClick(){
        console.log(this.props);
        this.props.fetchStarWarsPlanetsRequest()
    }
}
export default connect((state)=>{
    return state.HomeReducer;
}, HomeAction)(Home);
