import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-wrrw74gl.us.auth0.com"
    clientId="ZQDdDJrk8HC2M02bmd7jGXeA1rllBGwU"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
)
