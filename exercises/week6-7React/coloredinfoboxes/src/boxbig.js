import React from 'react'
import PropTypes from 'prop-types'

const BoxBig = (props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width,
        borderColor: props.borderColor,
        display: 'inline-block',
        textAlign: 'center',
        
    }
    
    return (
        <div style={style}>
            BIG
            <h3>{props.title}</h3>
            <h1>Age = {props.age}</h1>
        </div>
    )
}

BoxBig.propTypes = {
    title: PropTypes.string,
    age: PropTypes.number,
}

export default BoxBig