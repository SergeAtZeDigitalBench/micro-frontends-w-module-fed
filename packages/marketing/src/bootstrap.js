import React from 'react'
import ReactDOM from 'react-dom';

import App from './App'

const mount = (element) => {
  ReactDOM.render(
    <App/>,
    element
  )
}

if (process.env.NODE_ENV === 'development') {
    const rootEl = document.getElementById("_marketing-dev-root");
    !!rootEl && mount(rootEl)
}

export { mount }

