import React from 'react'

const Button4 = (props) => {
    return(
        <div>
            {props.status4 ?
            <h1 onClick={props.funk4}>4 ON</h1>
            :
            <h1 onClick={props.funk4}>4 OFF</h1>
            }
            
        </div>    
    )
}

export default Button4