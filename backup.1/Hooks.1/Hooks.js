import React, { useState } from 'react'
 const Hooks = () => {
   let [state,setState]=useState(1)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>{setState(state-1)}}>maneesha</button>
      <h2>happy</h2>
      <button onClick={()=>{setState(state+1)}}>lucky</button>
    </div>
  )
}
export default Hooks;

