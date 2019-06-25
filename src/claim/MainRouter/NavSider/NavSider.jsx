import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import NavData from './NavSider_data';
const {Sider}=Layout;
const {SubMenu}=Menu;
export default class NavSider extends React.Component{
    render(){
        return (
                <Menu className="menu_nav" mode="inline"
                    defaultSelectedKeys={['1001']}
                    defaultOpenKeys={['1000']}>
                    {
                        NavData.indexNav.map((navItem, index)=>{
                            if(navItem.chids.length<=0){
                                return (
                                    <Menu.Item key={navItem.id}>
                                        <Link to="/"><Icon type="mail" />{navItem.title}</Link>
                                    </Menu.Item>
                                )
                            }else{
                                return (
                                    <SubMenu key={navItem.id} title={ <span>{navItem.title}</span>}>
                                        {
                                            navItem.chids.map((childItem, index)=>{
                                                return (
                                                    <Menu.Item key={childItem.id}>
                                                        <Link to={childItem.url}>{childItem.title}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                        })
                    }
                </Menu>
        )
    }
}
