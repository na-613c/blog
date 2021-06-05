import React from 'react';

const PostPage = ({ post }: any) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.post}</p>
    </div>
  );
};

export default PostPage;
