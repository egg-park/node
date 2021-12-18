import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from '../_actions/types';

// 이전 state값과 action object를 받는다. 후에 next state를 리턴
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // ...state는 state={}를 그대로 가져온다는 의미
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, loginSuccess: action.payload}
            break;
        case AUTH_USER:
            return {...state, userData: action.payload}
            break;
        default:
            return state;
    }
}