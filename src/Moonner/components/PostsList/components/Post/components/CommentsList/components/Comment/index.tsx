import { FC} from 'react';
import styles from './style.module.scss';
import UserPhoto from 'src/ui/UserPhoto';

const Comment: FC = () => {
    return (
        <li className={styles.comment}>
            <div className={styles.comment_wrapper}>
                <UserPhoto url="/img/user_photo.png" className={styles.comment_photo} />
                <div className={styles.comment_name}>Bradley Ortiz</div>
            </div>
            <p className={styles.comment_text}>First comment</p>
        </li>
    );
};

export default Comment;