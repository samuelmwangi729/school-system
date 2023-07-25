import React, { Component } from 'react'
import { Navigation, Hero } from './Components'
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
        <Hero/>
      </header>
      </>
    )
  }
}

export default App
