import React, { useState } from 'react'
const Hooks = () => {
  let [state,setState]=useState("hiii everyone")

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>{setState("helo gdmrg")}}>maneesha</button>
       <button onClick={()=>{setState("byee gdngt")}}>manoj</button>
    </div>
  )
}
export default Hooks

