import { FC, useState } from 'react';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import Header from './components/Header';
import PostForm from './components/PostForm';
import style from './style.module.scss'
import IPost from 'src/types/data'
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const Moonner: FC = () => {

    // Add photo

    const [img, setImg] = useState<File>();
    const [imgURL, setImgURL] = useState();

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImgURL(fileReader.result);
    };

    const onLoadFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        setImg(file);
        fileReader.readAsDataURL(file);
    }

    // Add post

    const [value, setValue] = useState("");
    const [postsList, setPostsList] = useState<IPost[]>(() => JSON.parse(localStorage.getItem('posts') || "") || []);
    const date: string = new Date().toLocaleString();

    const onAddPost: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (value) {
            setPostsList([...postsList, {
                id: Date.now(),
                userPhoto: "/img/user_photo.png",
                userName: "Bradley Ortiz",
                postDate: date,
                text: value,
                img: imgURL,
            }])
        }
        setValue("");
        setImg(undefined);
        setImgURL(undefined);
    };

    //Delete post

    const onDeletePost = (id: number): void => {
        const newPostsList = postsList.filter(post => post.id !== id);
        setPostsList(newPostsList);
    }

    // Local storage
    useLocalStorage(postsList);

    return (
        <div className={style.moonner}>
            <h1 className={style.moonner_hidden}>Moonner</h1>
            <Navigation />
            <div className={style.moonner_wrapper}>
                <Header />
                <PostForm onAddPost={onAddPost} value={value} setValue={setValue} onLoadFile={onLoadFile} img={img} />
                <PostsList posts={postsList} onDeletePost={onDeletePost} />
            </div>
        </div>
    );
};

export default Moonner;