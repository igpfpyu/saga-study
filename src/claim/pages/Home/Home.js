import React from 'react';
import {NavLink, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {Menu, Icon, Layout} from "antd";
import HomeMessage from "./HomeMessage/HomeMessage";
import LeftRouters from "../../MainRouter/LeftRouters/LeftRouters";
import NavData from "../../MainRouter/Navigation/Navigation";
const {Content, Sider}=Layout;
const {SubMenu}=Menu;
export default class Home extends React.Component{
    render(){
        const {match}=this.props;
        console.log(this.props.match.url);
        return (
            <Layout>
                <Sider>
                    <LeftRouters navData={NavData.indexNavs} />
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
