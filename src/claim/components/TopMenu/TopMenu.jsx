import React from 'react';
import {Layout, Menu} from 'antd';
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
                <NavLink to="" className="logo">LOGO</NavLink>
                <Menu onClick={(e)=>this.handleClick(e)}
                      selectedKeys={[this.state.current]}
                      mode="horizontal">
                    {
                        NavList.map((item, index) =><Menu.Item key={item.id}>{item.name}</Menu.Item>)
                    }
                </Menu>
            </Header>
        )
    }
    handleClick(e){
            this.setState({
                current:e.key
            })
    }
}
