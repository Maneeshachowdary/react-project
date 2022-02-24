import React, { Component } from 'react'
import Axios from 'axios'
 class First extends Component {
     state={User:[]}
     componentDidMount(){
         Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((mani)=>{
             this.setState({User:mani.data

             })
         }

         )

     }
  render() {
    return (
      <>
      <div className='container'>
          <div className='row'>
              <div className='col-md-8'>
                  <table className='table table-hover'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.User.map((maneesha)=>{
                                return<tr>
                                    <td>{maneesha.id}</td>
                                    <td>{maneesha.name}</td>
                                    <td>{maneesha.email}</td>
                                </tr>
                            }

                            )
                        }
                    </tbody>
                  </table>
              </div>
            </div>
      </div>

      </>
    )
  }
}
export default First;