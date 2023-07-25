import React, { Component } from 'react'
import { Navigation } from './Components'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  render() {
    return (
      <>
      <header>
        <Navigation/>
      </header>
      </>
    )
  }
}

export default App
