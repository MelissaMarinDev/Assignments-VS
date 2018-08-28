import React from 'react'

const Button5 = (props) => {
    return (
    <div>
        {props.status5 ?
        <h1>I am High</h1>
        :
        <h1>I am Low</h1>
        }
    </div>
    )
}

export default Button5