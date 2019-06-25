import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Layout} from "antd";
import NavSider from "../NavSider/NavSider";
import Home from "../../pages/Home/Home";
import GiveMessage from "../../pages/GiveMessage/GiveMessage";
const {Content, Sider}=Layout;
export default class HomeNav extends React.Component{
    render(){
        return (
            <Layout>
                <Sider>
                    <NavSider />
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/give" component={GiveMessage} />
                    </Switch>
                </Content>
            </Layout>
        )
    }
}
