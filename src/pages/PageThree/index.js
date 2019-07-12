import React, { Component } from 'react'
import Nav from '../../components/Nav'

export default class PageThree extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>Page Three</h2>
        <p>
          This is page three. Click a link and view console for route changes
        </p>
      </div>
    )
  }
}
