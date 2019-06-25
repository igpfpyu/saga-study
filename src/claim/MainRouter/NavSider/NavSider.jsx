import React from 'react';
import {NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import NavData from './NavSider_data';
const {Sider}=Layout;
const {SubMenu}=Menu;
export default class NavSider extends React.Component{
    render(){
        console.log(NavData);
        return (
            <Sider>
                <Menu className="menu_nav" mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}>
                    {
                        NavData.indexNav.map((navItem, index)=>{
                            if(navItem.chids.length<=0){
                                return (
                                    <Menu.Item key={navItem.id}>
                                        <NavLink to="/"><Icon type="mail" />{navItem.title}</NavLink>
                                    </Menu.Item>
                                )
                            }else{
                                return (
                                    <SubMenu key={navItem.id} title={ <span>{navItem.title} </span> }>
                                        {
                                            navItem.chids.map((childItem, index)=>{
                                                return (
                                                    <Menu.Item key={childItem.id}>{childItem.title}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}
