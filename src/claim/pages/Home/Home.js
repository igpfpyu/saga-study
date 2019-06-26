import React from 'react';
import {connect} from 'react-redux';
import NavData from "./Home_data";
import * as HomeAction from './Home_action';
import {NavLink, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {Menu, Icon, Layout} from "antd";
import './Home_css.less';
import HomeMessage from "./HomeMessage/HomeMessage";
const {Content, Sider}=Layout;
const {SubMenu}=Menu;
class Home extends React.Component{
    render(){
        const {match}=this.props;
        console.log(this.props.match.url);
        return (
            <Layout>
                <Sider>
                    <Menu className="menu_nav" mode="inline"
                          defaultSelectedKeys={['1001']}
                          defaultOpenKeys={['1000']}>
                        {/*{this.navView(NavData) }*/}
                        <Menu.Item><NavLink to="/index">在线课程</NavLink></Menu.Item>
                        <Menu.Item><NavLink to={`/index/give-message`}>课程管理</NavLink></Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path={`${match.url}`} component={HomePage} />
                        <Route path={`${match.url}`} component={HomeMessage} />
                    </Switch>
                </Content>
            </Layout>
        )
    }
    navView(NavData){
        return NavData.indexNav.map((navItem, index)=>{
            if(navItem.chids.length<=0){
                return (
                    <Menu.Item key={navItem.id}>
                        <NavLink to="/"><Icon type="mail" />{navItem.title}</NavLink>
                    </Menu.Item>
                )
            }else{
                return (
                    <SubMenu key={navItem.id} title={ <span>{navItem.title}</span>}>
                        {
                            navItem.chids.map((childItem, index)=>{
                                return (
                                    <Menu.Item key={childItem.id}>
                                        <NavLink to={childItem.url}>{childItem.title}</NavLink>
                                    </Menu.Item>
                                )
                            })
                        }
                    </SubMenu>
                )
            }
        })
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
