import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from 'container/App'

const Routes = () => (
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>
)

export default Routes
