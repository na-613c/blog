import React, { FC } from 'react';
import Post from '../models/PostI'


const PostPage: FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.post}</p>
    </div>
  );
};

export default PostPage;
