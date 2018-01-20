import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to React Boilerplate</h1>
        <Link to='/1'>App 1</Link>
        <Link to='/2'>App 2</Link>
      </div>
    )
  }
}
