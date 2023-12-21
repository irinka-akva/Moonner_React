import { FC } from 'react';
import style from './style.module.scss'
import PostButton from 'src/ui/PostButton';
import UserPhoto from 'src/ui/UserPhoto';

const Post: FC = () => {

    const date: string = new Date().toLocaleString();

    return (
        <li className={style.post}>
            <UserPhoto url="/img/user_photo.png"/>
            <div className={style.post_wrapper}>
                <div className={style.post_name_wrapper}>
                    <div className={style.post_user_name}>Bradley Ortiz</div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 10.4167C18.75 9.1 18.0208 7.95833 16.96 7.41667C17.0883 7.05417 17.1583 6.6625 17.1583 6.25C17.1583 4.40833 15.7333 2.91833 13.9767 2.91833C13.585 2.91833 13.21 2.98833 12.8633 3.12667C12.3483 2.0125 11.2583 1.25 10 1.25C8.74168 1.25 7.65334 2.01417 7.13584 3.125C6.79001 2.9875 6.41418 2.91667 6.02251 2.91667C4.26418 2.91667 2.84084 4.40833 2.84084 6.25C2.84084 6.66167 2.91001 7.05333 3.03834 7.41667C1.97834 7.95833 1.24918 9.09833 1.24918 10.4167C1.24918 11.6625 1.90084 12.7483 2.86751 13.3217C2.85084 13.4633 2.84084 13.605 2.84084 13.75C2.84084 15.5917 4.26418 17.0833 6.02251 17.0833C6.41418 17.0833 6.78918 17.0117 7.13501 16.875C7.65168 17.9867 8.74001 18.75 9.99918 18.75C11.2592 18.75 12.3475 17.9867 12.8633 16.875C13.2092 17.0108 13.5842 17.0817 13.9767 17.0817C15.735 17.0817 17.1583 15.59 17.1583 13.7483C17.1583 13.6033 17.1483 13.4617 17.1308 13.3208C18.0958 12.7483 18.75 11.6625 18.75 10.4175V10.4167ZM13.2367 7.63833L9.62501 13.055C9.50418 13.2358 9.30668 13.3333 9.10418 13.3333C8.98501 13.3333 8.86418 13.3 8.75751 13.2283L8.66168 13.15L6.64918 11.1375C6.40501 10.8933 6.40501 10.4975 6.64918 10.2542C6.89334 10.0108 7.28918 10.0092 7.53251 10.2542L9.00751 11.7267L12.195 6.94333C12.3867 6.65583 12.775 6.58 13.0617 6.77083C13.35 6.9625 13.4283 7.35083 13.2367 7.6375V7.63833Z" fill="#D9D9D9" />
                    </svg>
                    <div className={style.post_time}>{date}</div>
                </div>
                <p className={style.post_text}>Hello world!!! Hello world!!! Hello world!!! Hello world!!! Hello world!!! Hello world!!! Hello world!!! Hello world!!!</p>
                <div className={style.post_photo_wrapper}>
                    <img className={style.post_photo} src="/img/image_1.jpg" alt="Post photo" />
                </div>
                <div className={style.post_icons_wrapper}>
                    <PostButton id="message" number="0"/>
                    <PostButton id="like" number="0"/>
                    <PostButton id="share" number="0"/>
                </div>
            </div>
        </li>
    );
};

export default Post;