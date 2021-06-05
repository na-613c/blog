import React from 'react';
import { Table, Typography, Button, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table';


interface Post {
    title: string;
    post: string;
}

const { Text } = Typography;


const columns: ColumnsType<Post> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
        render: (title: any, _: any, index: any) => <NavLink to={`/post${index + 1}`}>{title}</NavLink>
    },
    {
        title: 'Post',
        dataIndex: 'post',
        key: 'post',
        align: 'center',
        render: (post: string) => (
            <Text ellipsis style={{ margin: 'auto', width: 100 }}>{post}</Text>)
    },
]


const MainPage = ({ posts }: any) => {
    return (
        <Row style={{ margin: 'auto', width: 400 }} justify="space-around">
            <Col>
                <Table columns={columns} dataSource={posts} style={{ width: 200 }} bordered />
            </Col>
            <Col>
                <NavLink to={'/create-post-page'}><Button type="primary">Create Post</Button></NavLink>
            </Col>
        </Row>
    )
};

export default MainPage;
