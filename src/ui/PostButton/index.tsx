import { FC } from 'react';
import style from './style.module.scss'
import SvgIconPost from '../SvgIconPost';

interface PostButtonProps {
    id: string;
    number: string;
}

const PostButton: FC<PostButtonProps> = ({id, number}) => {
    return (
        <div className={style.post_btn_wrapper}>
            <button className={style.post_btn}>
            <SvgIconPost id={id}/>
            </button>
            <span className={style.post_btn_number}>{number}</span>
        </div>
    );
};

export default PostButton;