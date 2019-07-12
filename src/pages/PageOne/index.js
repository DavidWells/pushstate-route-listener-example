import React, { Component } from 'react'
import Nav from '../../components/Nav'

export default class PageOne extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>Page One</h2>
        <p>
          This is page one. Click a link and view console for route changes
        </p>
      </div>
    )
  }
}
