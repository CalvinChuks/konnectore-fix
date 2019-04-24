import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addPostIdsReducer from './reducers/addPostIdsReducer';
import addCommentIdsReducer from './reducers/addCommentIdsReducer';
import appendCommentIdReducer from './reducers/appendCommentIdReducer';
import appendPostIdReducer from './reducers/appendPostIdReducer';
import clearCommentIdsReducer from './reducers/clearCommentIdsReducer';
import clearPostIdsReducer from './reducers/clearPostIdsReducer';

const postIds = (postIds=[], action) => {
    switch(action.type) {
        case types.ME_ADD_POST_IDS:
            return addPostIdsReducer(postIds, action);
        case types.ME_APPEND_POST_ID:
            return appendPostIdReducer(postIds, action);
        case types.ME_CLEAR_POST_IDS:
            return clearPostIdsReducer(postIds, action);
        default:
            return postIds;
    }
};

const commentIds = (commentIds=[], action) => {
    switch(action.type) {
        case types.ME_ADD_COMMENT_IDS:
            return addCommentIdsReducer(commentIds, action);
        case types.ME_APPEND_COMMENT_ID:
            return appendCommentIdReducer(commentIds, action);
        case types.ME_CLEAR_COMMENT_IDS:
            return clearCommentIdsReducer(commentIds, action);
        default:
            return commentIds;
    }
};

const meReducers = combineReducers({
    postIds,
    commentIds,
});

export default meReducers;
