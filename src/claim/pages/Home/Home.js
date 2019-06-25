import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './Home_action';
import { Layout } from 'antd';
import './Home_css.less';
import NavSider from "../../MainRouter/NavSider/NavSider";
const { Content } = Layout;
class Home extends React.Component{
    render(){
        return (
            <Layout>
                <NavSider />
                <Content>INdex</Content>
            </Layout>
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
