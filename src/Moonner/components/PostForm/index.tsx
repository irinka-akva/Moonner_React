import { FC } from 'react';
import style from './style.module.scss'
import UserPhoto from 'src/ui/UserPhoto';

const PostForm: FC = () => {
    return (
        <div>
            <form className={style.form} action="">
                <div className={style.form_header_wrapper}>
                    <UserPhoto url="/img/user_photo.png"/>
                    <div className={style.form_user_name}>Bradley Ortiz</div>
                </div>
                <textarea className={style.form_text} name="post_text" id="post_text" placeholder="What's happening?"></textarea>
                <div className={style.form_file_wrapper}>
                    <div className={style.form_file_container}>
                        <label className={style.form_file_label} htmlFor="img_loader">Load photo</label>
                        <input className={style.form_file_loader} type="file" id="img_loader" name="post_img" />
                        <div className={style.form_img_name}>Имя файла</div>
                    </div>
                    <div className={style.form_btn_wrapper}>
                        <button className={style.form_btn} type="submit" disabled>Add post</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostForm;