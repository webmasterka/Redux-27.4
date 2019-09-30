import uuid from 'uuid';


const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id  //id komentarza do usunięcia
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id, //ID komentarza
        text//wyedytowany tekst komentarza
    }
}

function upComment(id, value) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        value //kciuk w górę
    }
}

function downComment(id, value) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        value //kciuk w dół
    }
}