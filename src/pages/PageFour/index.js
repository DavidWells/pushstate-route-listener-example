import React, { Component } from 'react'
import Nav from '../../components/Nav'

export default class PageFour extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>Page Four</h2>
        <p>
          This is page four. Click a link and view console for route changes
        </p>
      </div>
    )
  }
}
