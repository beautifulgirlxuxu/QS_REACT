import { FETCH_LOCATION_BY_IP_START } from './actionTypes'
// 将旧的状态，过渡到另一个状态 actions
export default (state = {
    status: 'init'
}, action) => {
    switch (action.type) {
        case FETCH_LOCATION_BY_IP_START:
            return { status: 'start'}
        default:
            return state
    }
}