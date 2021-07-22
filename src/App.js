import React, { Component } from 'react'
import Home from './Components/Home'
import './App.css';
import RouterComponent from './Components/RouterComponent';
import Parse from './Parse'



export default class App extends Component {
  render() {
    return (
      <div className="home">

        <RouterComponent />
        {/* <Parse /> */}
        {/* <Task /> */}
      </div>
    )
  }
}
