import React, { useState } from 'react'
const First = () => {
    let[state,setState]=useState("Hello")
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{setState("gdmrg")}}>maneesha</button>
        <button onClick={()=>{setState("gdngt")}}>manoj</button>
    </div>
  )
}
export  default First

