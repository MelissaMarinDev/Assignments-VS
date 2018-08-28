import React from 'react'

const Box4 =(props) => {
    const style={
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize,
        height:100,
        width:100,
    }
    return(
        <div style={style}>
            I am Box 4!!! 
            WOOHOO!
        </div>
    )
}

export default Box4