import { FC } from 'react';
import styles from './style.module.scss';

interface MainButtonProps {
    type: "submit" | "button";
    onClick: () => React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    text: string;
}

const MainButton: FC<MainButtonProps> = ({ type, onClick, disabled, text }) => {
    return (
        <>
            <button className={styles.main_btn} type={type} onClick={onClick} disabled={disabled}>{text}</button>
        </>
    );
};

export default MainButton;