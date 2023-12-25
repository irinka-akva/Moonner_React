import { FC } from 'react';
import Post from './components/Post';
import style from './style.module.scss'
import IPost from 'src/types/data';

interface PostsListProps {
    posts: IPost[];
    onDeletePost: (id: number) => void;
}

const PostsList: FC<PostsListProps> = ({ posts, onDeletePost }) => {
    return (
        <ul className={style.posts_list}>
            {
                posts.map(post => <Post key={post.id} onDeletePost={onDeletePost} {...post} />)
            }

        </ul>
    );
};

export default PostsList;