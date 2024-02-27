import React, { Component } from 'react'

class List extends Component {
    state={
        data:[
            {
                id:0,
                name:"rahul",
                age:18
            },
            {
                id:1,
                name:"ramu",
                age:20
            }
        ]
    }
  render() {
    return (
        <div>
      <ul>
        {this.state.data.map((value,index)=>{
            return (
                <li key={value.id}>
                    {value.id},{value.name},{value.age}
                 </li>
            )
        })}
      </ul>
      </div>
    )
  }
}

export default List