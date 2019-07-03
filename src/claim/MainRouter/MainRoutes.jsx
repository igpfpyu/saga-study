import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import OnlineCourse from "../pages/OnlineCourse/OnlineCourse";
import MainContent from "./MainContent/MainContent";
import Home from "../pages/Home/Home";
import CoachTrain from '../pages/CoachTrain/CoachTrain';
export default class MainRoutes extends React.Component{
    render(){
        return (
            <MainContent>
                <Switch>
                    <Route path="/index" component={Home} />
                    <Route path="/lesson" component={OnlineCourse} />
                    <Route path="/coach-train" component={CoachTrain} />
                    <Redirect to="/index"/>
                </Switch>
            </MainContent>
        )
    }
}

