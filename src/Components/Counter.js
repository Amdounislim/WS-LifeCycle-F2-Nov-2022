import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        console.log("Counter.js constructor");
        super(props)
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }



    componentDidMount() {
        console.log("Counter.js componentDidMount")
    }

    componentDidUpdate() {
        console.log("Counter.js componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("Counter.js componentWillUnmount")
    }


    render() {
        console.log("Counter.js render");
        return <div>
            <h2>-- Counter --</h2>

            <button onClick={this.increment} >+</button>
            <h3>{this.state.count}</h3>
            <button onClick={this.decrement}>-</button>
        </div>;
    }
}
