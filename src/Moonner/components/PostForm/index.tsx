import { FC, SetStateAction, Dispatch } from 'react';
import style from './style.module.scss'
import UserPhoto from 'src/ui/UserPhoto';
import MainButton from 'src/ui/MainButton';
import TextArea from 'src/ui/TextArea';

interface PostFormProps {
    onAddPost: React.MouseEventHandler<HTMLButtonElement>;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    onLoadFile: React.ChangeEventHandler<HTMLInputElement>;
    img: File | undefined;
}

const PostForm: FC<PostFormProps> = ({ onAddPost, value, setValue, onLoadFile, img }) => {

    return (
        <div>
            <form className={style.form} action="">
                <div className={style.form_header_wrapper}>
                    <UserPhoto url="/img/user_photo.png" />
                    <div className={style.form_user_name}>Bradley Ortiz</div>
                </div>
                <TextArea value={value} onChange={(e) => { setValue(e.target.value) }} id="post_text" placeholder="New post"/>
                <div className={style.form_file_wrapper}>
                    <div className={style.form_file_container}>
                        <label className={style.form_file_label} htmlFor="img_loader">Load photo</label>
                        <input className={style.form_file_loader} type="file" id="img_loader" name="post_img" onChange={onLoadFile} />
                        <div className={style.form_img_name}>{img ? img.name : ""}</div>
                    </div>
                    <div className={style.form_btn_wrapper}>
                        <MainButton type="submit" onClick={onAddPost} disabled={!value.trim()} text="Add post" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostForm;