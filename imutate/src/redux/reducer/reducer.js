// 模块化， n 个 reducer, users.js auth article
// 
import { combineReducers } from 'redux'
import { users } from './users'

const reducer = combineReducers( {
    users
} )

export default reducer