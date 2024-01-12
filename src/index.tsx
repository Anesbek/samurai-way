import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost} from "./redux/state";

// addPost("Sam");

ReactDOM.render

    (<App state={state} addPost={addPost} />, document.getElementById('root')
);