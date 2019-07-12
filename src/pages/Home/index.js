import React, { Component } from 'react'
import Nav from '../../components/Nav'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>Home</h2>
        <p>
          This is the homepage. Click a link and view console for route changes
        </p>
      </div>
    )
  }
}
