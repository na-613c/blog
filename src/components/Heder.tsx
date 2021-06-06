import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { PATH_MAIN_PAGE, PATH_CREATE_POST_PAGE } from '../path'
import { NavLink, useLocation } from 'react-router-dom'

const { Header } = Layout;


const HeaderApp = () => {

    const [selectedKeys, setSelectedKeys] = useState(['2'])

    let location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case PATH_MAIN_PAGE:
                setSelectedKeys(['1']);
                break;
            case PATH_CREATE_POST_PAGE:
                setSelectedKeys(['2']);
                break;
            default: setSelectedKeys(['0']);
        }
    }, [location])

    return (
        <Header style={{ marginBottom: 50 }}>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
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
