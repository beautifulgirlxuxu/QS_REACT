export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const registerActions = (newUser) => {
    // action 负责，提交 reducer
    return {
        type: REGISTER_USER,
        data: newUser
    }
}

export const loginActions = (user) => {
    return {
        type: LOGIN_USER,
        data: user
    }
}