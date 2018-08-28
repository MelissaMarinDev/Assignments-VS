import React from 'react'

function Toggle (props){

    return(
        <div style={{display: "inline-block"}}>
            {props.myObject ? 
            <h1 onClick={props.button}> ON </h1>
            :
            <h1 onClick={props.button}> OFF </h1>
            }
        </div>   
    )
}


export default Toggle