import React from 'react';
import {
    Layout
} from 'antd';
import TopMenu from "../../components/TopMenu/TopMenu";
export default class MainContent extends React.Component {
    render(){
        return (
            <Layout className="pages">
                <TopMenu></TopMenu>
                {this.props.children}
            </Layout>
        )
    }

}
