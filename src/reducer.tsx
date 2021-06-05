export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_POST':
            return { posts: [...state.posts, action.post] };
        default:
            throw new Error();
    }
};
