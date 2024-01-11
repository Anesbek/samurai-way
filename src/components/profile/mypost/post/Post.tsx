import React from "react";
import s from './Post.module.css';



export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/564x/14/89/35/148935d1566f467b5319b5a0fc6c5f3f.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    );
}