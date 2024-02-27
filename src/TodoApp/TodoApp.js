import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
    state={
      input:"",
      items:[]
}
    handleChange=(event)=>{
      this.setState({
        input:event.target.value
      })
      
}
    storeItems=(event)=>{
      event.preventDefault()
      const{input}=this.state
      if(input!=''){
        this.setState({
          items:[...this.state.items,input],
          input:""
        })
      }

}
    deleteItems=(key)=>{
    //   const allItems=this.state.items
    // allItems.splice(key,1)

    this.setState({
      // items:allItems
      items:this.state.items.filter((data,index)=>index!==key)
    })
}

  render() {

    const{input,items}=this.state
    console.log(items);
    return (
      <div className='todo-container'>
        <form onSubmit={this.storeItems} className='input-section'>
            <h1>TODO APP</h1>
            <input value={input} onChange={this.handleChange} type='text' placeholder='enter items'></input>
        </form>

        <ul>
           {items.map((data,index)=>(
            <li key={(index)}>{data}<i className="fa-solid fa-trash" onClick={()=>this.deleteItems(index)}></i></li>
           ))}
        </ul>
      </div>
    )
  }
}
