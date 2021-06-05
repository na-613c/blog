import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreatePostPage from './CreatePostPage';
import MainPage from './MainPage';
import PostPage from './PostPage';

const AppRouter = ({ state, addPost }: any) => {

    return (
        <Switch>
            <Route path={'/'} render={() => <MainPage posts={state.posts} />} exact={true} />
            <Route path={'/create-post-page'} render={() => <CreatePostPage addPost={addPost} />} exact={true} />
            {state.posts.map((post: any, id: any) => (
                <Route key={id} path={`/post${id + 1}`} render={() => <PostPage post={post} />} exact={true} />
            ))}
            <Redirect to={'/'} />
        </Switch>
    );
};
export default React.memo(AppRouter);
