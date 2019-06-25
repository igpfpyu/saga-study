import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../pages/Home/Home";
import TopMenu from "../components/TopMenu/TopMenu";
import OnlineCourse from "../pages/OnlineCourse/OnlineCourse";
import {Layout} from "antd";
export default class MainRoutes extends React.Component{
    render(){
        return (
            <Layout className="pages">
                <TopMenu></TopMenu>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lesson" exact component={OnlineCourse} />
                </Switch>
            </Layout>
        )
    }
}
