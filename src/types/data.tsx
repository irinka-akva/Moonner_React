export default interface IPost {
    id: string | number;
    userPhoto: string;
    userName: string;
    postDate: string;
    text: string;
    img: string | undefined;
}