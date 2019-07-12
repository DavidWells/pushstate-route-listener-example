import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'
import onRouteChanges from './onRouteChange'
import { Router } from "@reach/router"
import './index.css'

onRouteChanges((route) => {
  console.log(`route changed to "${route}"`)
})

const App = (
  <Router>
    <Home path="/" />
    <PageOne path="/one" />
    <PageTwo path="/two" />
    <PageThree path="/three" />
    <PageFour path="/four" />
  </Router>
)

ReactDOM.render(App, document.getElementById('root'))
