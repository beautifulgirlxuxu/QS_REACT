import { REQUEST_POSTS } from "../actions";
import { RECEIVE_POSTS } from "../actions";

const posts = (state =  {
    isFetching: false,
    items:[],
    didInvalidate: false
}, action) =>{
    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
            case RECEIVE_POSTS:
            return {
                ...state, // 展开旧状态
                isFetching: false,
                didInvalidate: false,
                items: action.posts, //action 负责类型，状态改变
                lastUpdated: action.receivedAt
            }
            default: return state
    }
}
