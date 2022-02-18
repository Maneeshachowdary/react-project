import React from 'react'
import Axios from 'axios'
class User extends React.Component {
eventHandler=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((mani)=>{
            console.log(mani.data)
        }

        )
        .catch((maneesha)=>{
            console.log(maneesha.data)
        }

        )
    }
    
  render() {
    return (
      <>
      <h1>UserData</h1>
      <button onClick={this.eventHandler}>UserData</button>
      </>
    )
  }
}
export default User
