

import state from './redux/state';
import {addPost} from "./redux/state";
import {rerenderEntiretree} from "./render";

// addPost("Sam");


rerenderEntiretree(state);
