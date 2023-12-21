import { FC } from 'react';
import styles from './style.module.scss'
import NavigationItem from './components/NavigationItem';

const Navigation: FC = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigation_list}>
                <NavigationItem/>
            </ul>
        </div>
    );
};

export default Navigation;