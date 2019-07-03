import React from 'react';
import {Layout, Menu, Button, Dropdown} from 'antd';
import {Link} from "react-router-dom";
import './TopMenu.less';
import NavList from './TopMenu_data';
const { Header} = Layout;
export default class TopMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"/"+window.location.pathname.split('/')[1]
        }
    }
    componentDidMount() {
        console.log(window.location.pathname.split('/'));
    }
    render(){
        return (
            <Header className="top-header">
                <div className="header-left">
                    <Link to="" className="logo">LOGO</Link>
                    <Menu onClick={(e)=>this.handleClick(e)}
                          selectedKeys={[this.state.current]}
                          mode="horizontal">
                        {
                            NavList.map((item, index) =><Menu.Item key={item.url}><Link to={item.url}>{item.name}</Link></Menu.Item>)
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
        console.log(e);
            this.setState({
                current:e.key
            })
    }
}
