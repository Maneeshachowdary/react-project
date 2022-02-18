import React from 'react'


let Footer=(props)=>{
    return(
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <h1>{props.m_name}</h1>
            <hr/>
        </div>
    )

}
export default Footer;