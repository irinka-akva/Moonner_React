import { useEffect} from "react";
import IPost from "src/types/data";

export const useLocalStorage = (postsList:IPost[]) => {
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(postsList));
     }, [postsList]);
}