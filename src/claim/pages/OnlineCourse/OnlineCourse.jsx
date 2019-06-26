import React from 'react';
import {Icon, Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import Home from "../Home/Home";
import GiveMessage from "../GiveMessage/GiveMessage";
import OnlineCoursePage from "./OnlineCoursePage/OnlineCoursePage";
import {NavLink} from "react-router-dom";
import OnlineCourseMessage from "./OnlineCourseMessage/OnlineCourseMessage";
import NavData from "../Home/Home_data";
const {Sider, Content}=Layout;
const {SubMenu}=Menu;
export default class OnlineCourse extends React.Component{
    navView(){
        return NavData.indexNav.map((navItem, index)=>{
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
        })
    }
    render(){
        let {match}=this.props;
        console.log(match.url)
        return (
            <Layout>
                <Sider>
                    <Menu className="menu_nav" mode="inline"
                    defaultSelectedKeys={['1001']}
                    defaultOpenKeys={['1000']}>
                    {this.navView(NavData) }
                    </Menu>
                    {/*<NavLink to="/lesson">在线课程</NavLink>*/}
                    {/*<NavLink to="/lesson/message">课程管理</NavLink>*/}
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path={`${match.url}`} component={OnlineCoursePage} />
                        <Route path={`/lesson/message`} component={OnlineCourseMessage} />
                    </Switch>
                </Content>
            </Layout>
        )
    }
}
