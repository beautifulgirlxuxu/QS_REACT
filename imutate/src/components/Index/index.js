import React, { Component } from 'react'
import './index.css'
import Header from './Header'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerActions, loginActions } from '../../redux/action/users'
import store from '../../redux/store/store';
import { provider } from 'react-redux'

class Index extends Component {
    render() {
        return ( 
            <div className = 'App' >
            <div className = 'App-header'>
                <Header/>
             </div> 
             <div className = 'App-body' >
            <div className = 'welcome-view' >
            <div className = "category-nav" >
            1 adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
             <div className = "main" >
            21 adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div> 
            <div className = "sidebar" >
            31 adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
             </div> 
                </div> 
                    </div>
        )
    }
}
// connect 再返回时加一层 redux
//  react风格 jsx 组件化指令
// 相当于面包涂奶油
export default connect( (state)=> {
    return {
        users: state.users
    }
        },
            (dispatch) => {
                registerActions: bindActionCreators(registerActions, dispatch)
                loginActions: bindActionCreators(loginActions, dispatch)
          }
            )(Index)