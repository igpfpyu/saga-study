import React from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import OnlineCourse from "../pages/OnlineCourse/OnlineCourse";
import {Layout} from "antd";
import HomeNav from "./HomeNav/HomeNav";
import Home from "../pages/Home/Home";
import GiveMessage from "../pages/GiveMessage/GiveMessage";
import {Router, Route, Switch} from 'react-router-dom';
export default class MainRoutes extends React.Component{
    render(){
        return (
            <Layout className="pages">
                <TopMenu></TopMenu>
                <Switch>
                    <Route path="/" component={HomeNav} />
                    <Route path="/lesson" component={OnlineCourse} />
                </Switch>
            </Layout>
        )
    }
}
