import React from 'react'

function Button2 (props) {
   return(
        <div>
            {props.isHappy ? 
            <h1 onClick={props.myFunc}> Toggle ON </h1>
            :
            <h1 onClick={props.myFunc}> Toggle OFF </h1>
            }
        </div>
   )
}

export default Button2