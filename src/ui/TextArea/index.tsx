import { FC } from 'react';
import style from './style.module.scss'

interface TextAreaProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    elementName: string; 
    placeholder: string;
}

const TextArea: FC<TextAreaProps> = ({value, onChange, elementName, placeholder}) => {
    return (
        <>
            <textarea className={style.textarea} value={value} onChange={onChange} name={elementName} placeholder={placeholder}></textarea>
        </>
    );
};

export default TextArea;