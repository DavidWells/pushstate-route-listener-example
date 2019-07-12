import React, { Component } from 'react'
import Nav from '../../components/Nav'

export default class PageTwo extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>Page Two</h2>
        <p>
          This is page two. Click a link and view console for route changes
        </p>
      </div>
    )
  }
}
