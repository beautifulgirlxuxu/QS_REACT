import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false,
    token: null,
    currentUser: null,
})

export const users = ( state = initialState, action = {} ) => {
    switch (action.type) {
        // case  REGISTER_USER: 
        //     return state.merge({
        //         'newUser': action.data,
        //         'saveSuccess': false,
        //         'error': null
        //     })
        // case REGISTER_USER_SUCCESS:
        //     return state.set('saveSuccess', action.data)
        // case REGISTER_USER_FAILURE:
        //     return state.set('error', action.data) //减少对原来state 的干扰
        // case CURRENT_USER: 
        // return state.merge({
        //     'token': action.data,
        //     'error': null,
        // })
        default: return state
    }
}