import { FC } from 'react';
import style from './style.module.scss'

interface UserPhotoProps {
    url: string;
}

const UserPhoto: FC<UserPhotoProps> = ({url}) => {
    return (
        <>
            <div className={style.header_img_wrapper}>
                <img src={url} alt="User's photo" width="48" height="48" />
            </div>

        </>
    );
};

export default UserPhoto;