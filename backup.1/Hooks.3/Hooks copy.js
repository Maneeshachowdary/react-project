import React, { useState } from 'react'
 const Hooks = () => {
   let [state,setState]=useState(30000)
  return( 
    <div>
       <h1>{state}</h1>
       <button onClick={()=>{setState(state+10000)}}>maneesha</button>
        <button onClick={()=>{setState(state+2000)}}>manoj</button>

    </div>
  )  
}
export default Hooks;


