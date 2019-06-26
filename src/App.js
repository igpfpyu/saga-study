import React from 'react';
import './App.css';
import MainRoutes from './claim/MainRouter/MainRoutes';
import {Redirect, Switch, Route} from "react-router-dom";
import Error from "./claim/pages/Error/Error";
import Login from "./claim/pages/Login/Login";
const isLogin=true;
export default class App extends React.Component {
    render(){
        // return <MainRoutes />
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" render={()=>(
                    isLogin?<MainRoutes />: <Redirect to="/login" />
                )} />
                <Route path="/404" component={Error} />
                <Redirect to="/" />
            </Switch>
        );
    }
}
