import React, { Component } from 'react'

class Forms extends Component {

  state={
    // inputValue:''
    firstName:'',
    lastName:'',
    // submitValue:''
  }

onHandle=(event)=>{
  // console.log(event.target.value);
  this.setState({
    // inputValue:event.target.value
    [event.target.name]:event.target.value
  })
}

onSubmit=()=>{
  console.log(this.state);
  // const submitValue = `${this.state.firstName} ${this.state.lastName}`;
  //   this.setState({ submitValue });  // Set the submitted value in the state
}

  render() {
    return (
      <div>
        <form>
          <input name='firstName' value={this.state.inputValuealue} onChange={this.onHandle} type='text'></input>
          <input name='lastName' value={this.state.inputValuealue} onChange={this.onHandle} type='text'></input>
          <button type='button' onClick={this.onSubmit}>submit</button>
          {/* <h1>Name: {this.state.submitValue}</h1> */}
        </form>
      </div>
    )
  }
}

export default Forms;