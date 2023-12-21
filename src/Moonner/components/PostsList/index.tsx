import { FC } from 'react';
import Post from './components/Post';
import style from './style.module.scss'

const PostsList: FC = () => {
    return (
        <ul className={style.posts_list}>
            <Post/>
            <Post/>
        </ul>
    );
};

export default PostsList;