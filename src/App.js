import React, { Component } from 'react';
import "./App.css"
import Counter from './Components/Counter';

export default class App extends Component {

  constructor(props) {
    console.log("App.js constructor");
    super(props)
    this.state = {
      show: true
    };
  }

  //  func=()=>{
  //   console.log("hello");
  // }

  componentDidMount() {
    console.log("App.js componentDidMount");
    // this.func()
  }



  render() {
    console.log("App.js render")
    return <div className='App' >
      <h1>React LifeCycle methods</h1>
      <button onClick={() => this.setState({ show: !this.state.show })} >Show Component</button>
      {this.state.show && <Counter />}
    </div>;
  }
}

