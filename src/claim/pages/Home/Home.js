import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
import { Layout } from 'antd';

//头部导航
import TopMenu from '../../components/TopMenu/TopMenu';
import './Home_css.less';
const { Content, Sider } = Layout;

class Home extends React.Component{
    render(){
        return (
            <Layout className="pages">
                <TopMenu></TopMenu>
                <Layout>
                    <Sider></Sider>
                    <Content>Content</Content>
                </Layout>
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
