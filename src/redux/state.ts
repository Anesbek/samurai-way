import {rerenderEntiretree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi,how are you?', likesCount: 12},
            {id: 2, message: 'First post?', likesCount: 2},
            {id: 3, message: 'First post?', likesCount: 3},
            {id: 4, message: 'First post?', likesCount: 2},
        ],


    },

    dialogPage: {

        dialogs: [
            {id: 1, name: 'Ali'},
            {id: 2, name: 'Anes'},
            {id: 3, name: 'Kin'},
            {id: 4, name: 'Son'},
            {id: 5, name: 'Mn'},
            {id: 5, name: 'Moo'},
        ],

        messeges: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How r you'},
            {id: 3, message: 'Yooo'},
            {id: 4, message: 'Yooo'},
            {id: 5, message: 'Yooo'},
        ]
    }


}

export let addPost = (postMessage: any) => {
    let newPost ={
        id: 5,
        message: postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntiretree(state)
}

export default state;