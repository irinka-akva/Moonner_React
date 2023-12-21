import { FC } from 'react';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import Header from './components/Header';
import PostForm from './components/PostForm';
import style from './style.module.scss'

const Moonner: FC = () => {
    return (
        <div className={style.moonner}>
            <h1 className={style.moonner_hidden}>Moonner</h1>
            <Navigation />
            <div className={style.moonner_wrapper}>
                <Header />
                <PostForm />
                <PostsList />
            </div>
        </div>
    );
};

export default Moonner;