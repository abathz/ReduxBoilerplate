import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Routes from './routes'
import reducers from './reducers'
import './assets/scss'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('main'))
