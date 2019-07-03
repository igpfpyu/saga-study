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
        }
    }
    componentDidMount() {
        console.log(this.props);
    }

    render(){
        let navData=this.props.navData;
        return (
            <Menu className="menu_nav" mode="inline"
                  defaultSelectedKeys={[navData[0].chids && navData[0].chids.length>0?  navData[0].chids[0].id: null ]}
                  selectedKeys={[window.location.pathname]}
                  defaultOpenKeys={[navData[0].id]}>
                { this.navView(navData) }
            </Menu>
        );
    }
    navView(navData){
        console.log(navData);
        return navData.map((navItem, index)=>{
            if(navItem.chids && navItem.chids.length>0){
                return (
                    <SubMenu key={navItem.id} title={ <span>{navItem.title}</span>}>
                        {
                            navItem.chids.map((childItem, index)=>{
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

