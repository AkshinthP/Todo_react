import React, { Component } from 'react'

class Counter extends Component {

    state={
        counter:0
    }

    incriment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    decriment=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    render(){
        return(
            <div>
                <h1>hello</h1>
                <h4>{this.state.counter}</h4>
                <button onClick={this.incriment}>+</button>
                <button onClick={this.decriment}>-</button>
            </div>
        )
    }
}

export default Counter;