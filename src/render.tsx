import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

// addPost("Sam");
export let rerenderEntiretree = (state:any)=>{
    ReactDOM.render
    (<App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>,
        document.getElementById('root'));
}



