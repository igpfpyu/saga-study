import React from 'react';
import {Layout, Menu, Button, Dropdown} from 'antd';
import {NavLink} from "react-router-dom";
import './TopMenu.less';
import NavList from './TopMenu_data';
const { Header} = Layout;
export default class TopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"1010"
        }
    }
    render(){
        return (
            <Header className="top-header">
                <div className="header-left">
                    <NavLink to="" className="logo">LOGO</NavLink>
                    <Menu onClick={(e)=>this.handleClick(e)}
                          selectedKeys={[this.state.current]}
                          mode="horizontal">
                        {
                            NavList.map((item, index) =><Menu.Item key={item.id}>{item.name}</Menu.Item>)
                        }
                    </Menu>
                </div>
                <div style={{float:"right"}}>
                    <Dropdown overlay={this.dropdownMenu()} trigger={['click']}>
                        <Button shape="circle" icon="user" size="small" />
                    </Dropdown>
                </div>
            </Header>
        )
    }
    dropdownMenu(){
        return (
            <Menu onClick={(e)=>this.dropdownMenuCLick(e)}>
                <Menu.Item key="1">个人设置 </Menu.Item>
                <Menu.Item key="2">退出</Menu.Item>
            </Menu>
        )
    }
    dropdownMenuCLick(e){
        console.log(e)
    }
    handleMenuClick(){

    }
    handleClick(e){
            this.setState({
                current:e.key
            })
    }
}
