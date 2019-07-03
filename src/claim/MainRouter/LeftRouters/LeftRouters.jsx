import React from 'react';
import {
    Menu
} from 'antd';
import {NavLink} from "react-router-dom";
import './LeftRouters.less';
const {SubMenu}=Menu;
export default class LeftRouters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            now:0
        }
    }
    componentDidMount() {
        console.log(this.props);
    }

    render(){
        let {indexNav}=this.props.navData;
        return (
            <Menu className="menu_nav" mode="inline"
                  defaultSelectedKeys={[indexNav[0].chids[0].id]}
                  selectedKeys={[window.location.pathname]}
                  defaultOpenKeys={[indexNav[0].id]}>
                { this.navView(indexNav) }
            </Menu>
        );
    }
    navView(indexNav){
        console.log(indexNav);
        return indexNav.map((navItem, index)=>{
            if(navItem.chids.length>0){
                return (
                    <SubMenu key={navItem.id} title={ <span>{navItem.title}</span>}>
                        {
                            navItem.chids.map((childItem, index)=>{
                                console.log(childItem.url);
                                return (
                                    <Menu.Item key={childItem.url}>
                                        <NavLink to={childItem.url}>{childItem.title}</NavLink>
                                    </Menu.Item>
                                )
                            })
                        }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={navItem.url}>
                        <NavLink to={navItem.url}>{navItem.title}</NavLink>
                    </Menu.Item>
                );
            }

        })
    }
}

