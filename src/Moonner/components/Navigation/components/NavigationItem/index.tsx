import { FC } from 'react';
import SvgNavigationItem from 'src/ui/SvgNavigationItem';
import styles from './style.module.scss'

const NavigationItem: FC = () => {

    const navigationItems: string[] = ["", "Home", "Notifications", "Messages", "Bookmarks", "Lists", "Profile"];

    return (
        <> {
            navigationItems.map(item => {
                return (
                    <li className={styles.item} key={item}>
                        <a className={styles.item_link} href="#">
                            <div className={styles.item_link_wrapper}>
                                <SvgNavigationItem id={item} />
                                <span className={styles.item_text}>{item}</span>
                            </div>
                        </a>
                    </li>
                )
            })
        }
        </>
    )
}

export default NavigationItem;