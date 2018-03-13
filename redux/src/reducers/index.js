// reducer 纯函数 将旧状态+传参数=返回新状态
export default (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}