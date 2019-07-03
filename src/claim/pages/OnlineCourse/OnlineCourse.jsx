import React from 'react';
import {Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import OnlineCoursePage from "./OnlineCoursePage/OnlineCoursePage";
import {NavLink} from "react-router-dom";
import OnlineCourseMessage from "./OnlineCourseMessage/OnlineCourseMessage";
import NavData from "../../MainRouter/Navigation/Navigation";
import LeftRouters from "../../MainRouter/LeftRouters/LeftRouters";
const {Sider, Content}=Layout;
const {SubMenu}=Menu;
export default class OnlineCourse extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        let {match}=this.props;
        return (
            <Layout>
                <Sider>
                    <LeftRouters navData={NavData.lessonNavs} />
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
