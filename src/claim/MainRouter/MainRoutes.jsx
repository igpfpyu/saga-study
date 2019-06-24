import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
export default class MainRoutes extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/404" component={Error} />
                <Redirect to="/404" />
            </Switch>
        )
    }
}
