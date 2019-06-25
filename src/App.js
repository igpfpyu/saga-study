import React from 'react';
import './App.css';
import MainRoutes from './claim/MainRouter/MainRoutes';
import {Redirect, Route, Switch} from "react-router";
import Error from "./claim/pages/Error/Error";
export default class App extends React.Component {
    render(){
        return (
            <Switch>
                <Route path="/" component={MainRoutes} />
                <Route path="/404" component={Error} />
                <Redirect to="/404" />
            </Switch>
        );
    }
}
