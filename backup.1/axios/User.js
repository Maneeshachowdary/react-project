import React, { Component } from 'react'
import Axios from 'axios';
class User extends Component {
    getDataHandler = () =>  {
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
          console.log(response.data)
      })
    }
    // componentDidMount = ()=>{
      // Axios.get('https://jsonplaceholder.typicode.com/users')
      //   .then((response) => {
      //       console.log(response.data)
      //   })
    // }
render() {
    return <React.Fragment> 
        {/* <pre>{JSON.stringify(this.getDataHandler)}</pre> */}
        <h1>User Data</h1>
        <button onClick={this.getDataHandler}>Get Data</button>
        </React.Fragment>
        
}
}
export default User;