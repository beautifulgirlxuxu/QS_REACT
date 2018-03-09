import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { view as WeatherLocation } from './weatherLocation'
//函数组件
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <WeatherLocation />
      </div>
    </Provider>
  )
}

export default App