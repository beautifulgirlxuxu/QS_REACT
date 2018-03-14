### Immutable

 负责用户模块, immutable 保证 state 不变
 React state 改变 renderer 重绘页面
 假设 state 不变，没必要 renderer 关乎性能问题
 多处引用导致代码不可控
解决深浅拷贝问题
redux 引用 immutable来实现不可变的 state
业界认为可变的状态是万恶之源

引用
 var obj = {} 
 var obj1 = obj


redux 进入 ui 组件 使用  connect 
import {connect} from 'react-redux'

connect 再返回时加一层 redux

