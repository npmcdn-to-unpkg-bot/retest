import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import CarList from './containers/CarList'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <CarList />
    <App />
  </Provider>,
  document.getElementById('root')
)
