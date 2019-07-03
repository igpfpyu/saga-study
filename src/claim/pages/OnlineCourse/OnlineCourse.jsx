import React from 'react';
import {Layout} from "antd";
import {Route, Switch} from "react-router";
import OnlineCoursePage from "./OnlineCoursePage/OnlineCoursePage";
import OnlineCourseMessage from "./OnlineCourseMessage/OnlineCourseMessage";
import NavData from "../../MainRouter/Navigation/Navigation";
import LeftRouters from "../../MainRouter/LeftRouters/LeftRouters";
const {Sider, Content}=Layout;
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
                        <Route path={`${match.url}`} component={OnlineCourseMessage} />
                    </Switch>
                </Content>
            </Layout>
        )
    }
}
