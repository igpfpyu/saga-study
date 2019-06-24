import React from 'react';
import {Layout, Menu} from 'antd';
const { Header} = Layout;
export default class TopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"0"
        }
    }
    render(){
        return (
            <Header className="top-header">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail2"> Navigation One</Menu.Item>
                </Menu>
            </Header>
        )
    }
    handleClick(){

    }
}
