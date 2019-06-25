import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
import { Layout } from 'antd';

import './Home_css.less';
const { Content, Sider } = Layout;

class Home extends React.Component{
    render(){
        return (
            <Layout>
                <Sider></Sider>
                <Content>INdex</Content>
            </Layout>
        )
    }
    itemClick(){
        console.log(this.props);
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
