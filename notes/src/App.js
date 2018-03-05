import React, { Component } from 'react';
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
// .vue  三部分 
// jsx 语法
// mvvm render 支持以html格式写UI

// 最小单元的react组件就是带有render方法的components

// 类实现
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Notes />
    );
  }
}

export default App;
