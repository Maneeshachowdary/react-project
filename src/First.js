import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
 const First = () => {
    let [data,setData]=useState('')
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((mani)=>{
              setData(mani.data);    
        },[])
    })
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <table className='table table-hover'>
                <thead className='bg-dark'>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {data.length > 0 && data.map((manisha)=>{
                            return<tr>
                                <td>{manisha.id}</td>
                                <td>{manisha.name}</td>
                                <td>{manisha.email}</td>
                            </tr>
                        })
                    }
                </tbody>

                </table>
            </div>
        </div>
    </div>

    </>
  )
}
export default First