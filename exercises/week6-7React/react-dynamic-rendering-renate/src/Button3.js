import React from 'react'

const Button3 = (props) => {
    return(
        <div>

            {props.status3 ? 
            <h3 onClick={props.stat3Funk}>3 ON </h3>
            :
            <h3 onClick={props.stat3Funk}>3 OFF </h3>
            }

        </div>
    )
}

export default Button3