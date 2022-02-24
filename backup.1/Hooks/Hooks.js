import React, { useState } from 'react'

 const Hooks = () => {
    let [state,setstate]=useState('Hello')
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{
            setstate("hello pro")

        }}>maneesha</button>
    </div>
  )
}
export default Hooks;
