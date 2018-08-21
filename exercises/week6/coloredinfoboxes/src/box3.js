import React from 'react'

const Box3 = (props) => {
console.log(props)
    const styles={
        backgroundColor: props.backgroundColor,
        textHeight: props.textHeight,
        height: 100,
        width:200,
        display:'inline-block'
        
    }
    return(
        <div style={styles} >
        Box3
        </div>
    )
}

export default Box3