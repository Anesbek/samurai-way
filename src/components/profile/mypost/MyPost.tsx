import React from "react";
import {Post} from "./post/Post";
import s from './MyPost.module.css';

export const MyPost = (props: any) => {


    let postsElements = props.posts.map((p: { message: any; likesCount: any; }) => <Post message={p.message}
                                                                                         likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
        }

    }

    return (

        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>


            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    );
}