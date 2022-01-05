import React from 'react'
import Login from '../pages/login'
import Profile from '../pages/profile'
import { withProviders } from './providers/index'
import { Routing } from '../pages/index'


const App = () => {
  return (
    <div className='App'>
      <Routing />
    </div>
  )
}

export default withProviders(App)
