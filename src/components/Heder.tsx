import React from 'react';
import { Layout, Menu } from 'antd';
import { PATH_MAIN_PAGE, PATH_CREATE_POST_PAGE } from '../path'
import { NavLink } from 'react-router-dom'

const { Header } = Layout;


const HeaderApp = () => {
    return (
        <Header style={{ marginBottom: 50 }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <NavLink to={PATH_MAIN_PAGE}>Main page</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to={PATH_CREATE_POST_PAGE}>Create post page</NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default HeaderApp;
