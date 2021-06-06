import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreatePostPage from './CreatePostPage';
import MainPage from './MainPage';
import PostPage from './PostPage';
import { PATH_MAIN_PAGE, PATH_CREATE_POST_PAGE } from '../path'
import Action from '../models/ActionI'
import Posts from '../models/PostsI'


interface Props {
    state: Posts, 
    addPost: { (action: Action): void }
}

const AppRouter: FC<Props> = ({ state, addPost }) => {
    return (
        <Switch>
            <Route path={PATH_MAIN_PAGE} render={() => <MainPage posts={state.posts} />} exact={true} />
            <Route path={PATH_CREATE_POST_PAGE} render={() => <CreatePostPage addPost={addPost} />} exact={true} />
            {state.posts.map((post: any, id: any) => (
                <Route key={id} path={`/post${id + 1}`} render={() => <PostPage post={post} />} exact={true} />
            ))}
            <Redirect to={PATH_MAIN_PAGE} />
        </Switch>
    );
};
export default React.memo(AppRouter);
