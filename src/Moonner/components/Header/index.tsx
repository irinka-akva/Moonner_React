import { FC } from 'react';
import style from './style.module.scss'

const Header: FC = () => {
    return (
        <div className={style.header}>
            <h2 className={style.header_title}>Home</h2>
            <a className={style.header_link} href="#">
                <img className={style.header_img} src="/img/logo.svg" alt="Logo of Moonner" width="22" height="22" />
            </a>
        </div>
    );
};

export default Header;