import { FC } from 'react';
import style from './style.module.scss'
import cn from 'classnames';

interface UserPhotoProps {
    url: string;
    className?: string
}

const UserPhoto: FC<UserPhotoProps> = ({url, className}) => {
    return (
        <>
            <div className={cn(style.header_img_wrapper, className)}>
                <img src={url} alt="User's photo" width="48" height="48" />
            </div>

        </>
    );
};

export default UserPhoto;