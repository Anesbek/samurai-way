import React from "react";
import s from './Profile.module.css';
import {Post} from "./mypost/post/Post";
import {MyPost} from "./mypost/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

export const Profile = (props: any) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost posts = {props.state.posts}
                    addPost ={props.addPost}/>
        </div>


    );
}