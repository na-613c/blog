import React, { FC } from 'react';
import { Table, Typography } from 'antd';
import { NavLink } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table';
import Post from '../models/PostI'


const { Text } = Typography;


const columns: ColumnsType<Post> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
        render: (title: string, post: Post) => <NavLink to={`/post${post.id + 1}`}>{title}</NavLink>
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


const MainPage: FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div style={{ margin: 'auto', width: 400 }}>
            <Table
                columns={columns}
                dataSource={posts}
                pagination={{
                    defaultPageSize: 5,
                    pageSizeOptions: ['5', '10', '20', '50', '100'],
                    size: 'default',
                }}
                bordered />
        </div>
    )
};

export default MainPage;
