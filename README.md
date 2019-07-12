# Client Side Route Listener

Framework Agnostic Client Side Route Listener.

See [./src/onRouteChange.js](./src/onRouteChange.js)

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import onRouteChanges from './onRouteChange'
import { Router } from "@reach/router"
import './index.css'

/* Do custom stuff on route changes */
onRouteChanges((route) => {
  console.log(`route changed to "${route}"`)
})

const App = (
  <Router>
    <Home path="/" />
    <PageOne path="/one" />
    <PageTwo path="/two" />
    <PageThree path="/three" />
  </Router>
)

ReactDOM.render(App, document.getElementById('root'))
```
