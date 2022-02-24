import React from 'react'
import Sec from "./Sec"
 let First = () => {
     let Name="Mani"
     let Rno=34
     let Loc="Bnglre"
     
  return (
    <div>
        <Sec
        Name={Name}
        Rno={Rno}
        Loc={Loc}
        />

    </div>
  )
}
export default First;

