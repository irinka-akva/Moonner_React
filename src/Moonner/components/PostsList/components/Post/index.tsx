import { FC, useEffect, useRef, useState } from 'react';
import style from './style.module.scss'
import PostButton from 'src/ui/PostButton';
import UserPhoto from 'src/ui/UserPhoto';
import IPost from 'src/types/data';
import cn from 'classnames';
import CommentsList from './components/CommentsList';

interface PostProps extends IPost {
    onDeletePost: (id: number) => void;
}

const Post: FC<PostProps> = ({ id, userPhoto, userName, text, img, postDate, onDeletePost }) => {

    const [isOpen, setIsOpen] = useState(false);
    const onOpenComments = (): void => {
        setIsOpen(!isOpen);
    };
    const [isPressed, setIsPressed] = useState(false);
    const [likesNumber, setLikesNumber] = useState(0);

    const onAddLike = (): void => {
        setIsPressed(!isPressed);
        !isPressed ? setLikesNumber(likesNumber + 1) : setLikesNumber(likesNumber - 1);
    };
  
    return (
        <li className={style.post} id={id}>
            <UserPhoto url={userPhoto} />
            <div className={style.post_wrapper}>
                <div className={style.post_name_wrapper}>
                    <div className={style.post_user_name}>{userName}</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 10.4167C18.75 9.1 18.0208 7.95833 16.96 7.41667C17.0883 7.05417 17.1583 6.6625 17.1583 6.25C17.1583 4.40833 15.7333 2.91833 13.9767 2.91833C13.585 2.91833 13.21 2.98833 12.8633 3.12667C12.3483 2.0125 11.2583 1.25 10 1.25C8.74168 1.25 7.65334 2.01417 7.13584 3.125C6.79001 2.9875 6.41418 2.91667 6.02251 2.91667C4.26418 2.91667 2.84084 4.40833 2.84084 6.25C2.84084 6.66167 2.91001 7.05333 3.03834 7.41667C1.97834 7.95833 1.24918 9.09833 1.24918 10.4167C1.24918 11.6625 1.90084 12.7483 2.86751 13.3217C2.85084 13.4633 2.84084 13.605 2.84084 13.75C2.84084 15.5917 4.26418 17.0833 6.02251 17.0833C6.41418 17.0833 6.78918 17.0117 7.13501 16.875C7.65168 17.9867 8.74001 18.75 9.99918 18.75C11.2592 18.75 12.3475 17.9867 12.8633 16.875C13.2092 17.0108 13.5842 17.0817 13.9767 17.0817C15.735 17.0817 17.1583 15.59 17.1583 13.7483C17.1583 13.6033 17.1483 13.4617 17.1308 13.3208C18.0958 12.7483 18.75 11.6625 18.75 10.4175V10.4167ZM13.2367 7.63833L9.62501 13.055C9.50418 13.2358 9.30668 13.3333 9.10418 13.3333C8.98501 13.3333 8.86418 13.3 8.75751 13.2283L8.66168 13.15L6.64918 11.1375C6.40501 10.8933 6.40501 10.4975 6.64918 10.2542C6.89334 10.0108 7.28918 10.0092 7.53251 10.2542L9.00751 11.7267L12.195 6.94333C12.3867 6.65583 12.775 6.58 13.0617 6.77083C13.35 6.9625 13.4283 7.35083 13.2367 7.6375V7.63833Z" fill="#D9D9D9" />
                    </svg>
                    <div className={style.post_time}>{postDate}</div>
                    <button className={style.post_btn_delete} onClick={() => onDeletePost(id)}>
                        <svg className={style.post_delete} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"></path><path d="M14.625 3.75H3.375" stroke="#CDCDCD" strokeLinecap="round"></path><path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"></path><path d="M10.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round"></path><path d="M7.5 9V12.75" stroke="#CDCDCD" strokeLinecap="round"></path></svg>
                    </button>
                </div>
                <p className={style.post_text}>{text}</p>
                <div className={cn(style.post_photo_wrapper, {
                    [style.no_photo]: !img,
                })} >
                    <img className={style.post_photo} src={img} alt="Post photo" />
                </div>
                <div className={style.post_icons_wrapper}>
                    <PostButton id="message" number="0" onClick={onOpenComments} />
                    <PostButton id="like" number={likesNumber} onClick={onAddLike} />
                    <PostButton id="share" number="0" />
                </div>
                <CommentsList isOpen={isOpen} />
            </div>
        </li>
    );
};

export default Post;