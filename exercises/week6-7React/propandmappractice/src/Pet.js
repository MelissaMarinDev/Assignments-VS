import React from 'react'

const Pet = (props) => {

    return (
        <span> {`${props.name} is a ${props.breed}`}  <br/></span>
       
        
    )
}

export default Pet