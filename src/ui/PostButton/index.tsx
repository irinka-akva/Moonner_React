import { FC } from 'react';
import style from './style.module.scss'
import SvgIconPost from '../SvgIconPost';

interface PostButtonProps {
    id: string;
    number: string | number;
    onClick?: ()=> void;
}

const PostButton: FC<PostButtonProps> = ({id, number, onClick}) => {
    return (
        <div className={style.post_btn_wrapper}>
            <button className={style.post_btn} type='button' onClick={onClick}>
            <SvgIconPost id={id}/>
            </button>
            <span className={style.post_btn_number}>{number}</span>
        </div>
    );
};

export default PostButton;