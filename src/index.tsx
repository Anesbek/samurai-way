import state, {subcriber} from './redux/state';

// addPost("Sam");

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

// addPost("Sam");
let rerenderEntireTree = (state: {
    dialogPage: {
        dialogs: ({ name: string; id: number } | { name: string; id: number } | { name: string; id: number } | {
            name: string;
            id: number
        } | { name: string; id: number } | { name: string; id: number })[];
        messeges: ({ id: number; message: string } | { id: number; message: string } | {
            id: number;
            message: string
        } | { id: number; message: string } | { id: number; message: string })[]
    };
    profilePage: {
        newPostText: string;
        posts: ({ likesCount: number; id: number; message: string } | {
            likesCount: number;
            id: number;
            message: string
        } | { likesCount: number; id: number; message: string } | { likesCount: number; id: number; message: string })[]
    }
}) => {
    ReactDOM.render
    (<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

