import React from 'react';
import {Route, Switch} from 'react-router-dom'
import LeftRouters from "../../MainRouter/LeftRouters/LeftRouters";
import NavData from "../../MainRouter/Navigation/Navigation";
import OnlineCoursePage from "../OnlineCourse/OnlineCoursePage/OnlineCoursePage";
import OnlineCourseMessage from "../OnlineCourse/OnlineCourseMessage/OnlineCourseMessage";
import {Layout,} from "antd";
const {Content,Sider}=Layout;
export default class CoachTrain extends React.Component{
    render(){
        return (
            <Layout>
                <Sider>
                    <LeftRouters navData={NavData.coachNavs} />
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path={`/index`} component={OnlineCoursePage} />
                        <Route path={`/lesson/message`} component={OnlineCourseMessage} />
                    </Switch>
                </Content>
            </Layout>
        )
    }

}
