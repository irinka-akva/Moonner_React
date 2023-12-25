import { FC, forwardRef, useState } from 'react';
import styles from './style.module.scss'
import Comment from './components/Comment';
import MainButton from 'src/ui/MainButton';
import TextArea from 'src/ui/TextArea';
import cn from 'classnames';

interface CommentsListProps {
    isOpen: boolean;
}

const CommentsList: FC<CommentsListProps> = ({ isOpen }) => {

    const [value, setValue] = useState("");

    const onAddComment: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.preventDefault()
        console.log("Hello!")
    };

    return (
        <div className={cn(styles.comments_list_wrapper, {
            [styles.open]: isOpen
        })}>
            <h3 className={styles.comments_list_header}>Comments</h3>
            <ul className={styles.comments_list} >
                <Comment />
                <Comment />
                <Comment />
            </ul>
            <form className={styles.comments_form}>
                <TextArea value={value} onChange={(e) => setValue(e.target.value)} name="textarea" placeholder="New comment" />
                <MainButton type="submit" onClick={onAddComment} disabled={!value.trim()} text="Add comment" />
            </form>
        </div>
    );
};

export default CommentsList;