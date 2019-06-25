import React from 'react';
import {Layout} from "antd";
const {Sider, Content}=Layout;
export default class OnlineCourse extends React.Component{
    render(){
        return (
            <Layout>
                <Sider></Sider>
                <Content>OnlineLesson</Content>
            </Layout>
        )
    }
}
