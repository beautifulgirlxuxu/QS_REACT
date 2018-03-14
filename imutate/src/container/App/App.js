import React, { Component } from 'react'
import './App.css'
import Index from '../../components/Index/index'
import {connect} from 'react-redux'

export default class App extends Component{
    render() {
        return (
            <Index/>
        )
    }
}