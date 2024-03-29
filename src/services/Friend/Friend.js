import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';

const Friend = {
    getFriends,
    follow,
    unfollow,
    getFriend,
    growFriends,
};

function getFriends (token) {
    return Server.authGet('api/get-friends', token)
        .then( resp => resp.data );
};

function growFriends (token) {
    return Server.authGet('api/growff', token)
        .then( resp => resp.data )
        .catch( error => error );

}

function follow(user_id, token) {
    return Server.authPost('api/follow', {user_id: user_id}, token)
        .then( resp => resp.data );
}

function unfollow(user_id, token) {
    return Server.authPost('api/unfollow', {user_id: user_id}, token)
        .then( resp => resp.data );
}

function getFriend(user_id, token) {
    return Server.authGet('api/get-friend?user_id=' +user_id, token)
        .then( resp => resp.data )
}

export default Friend;