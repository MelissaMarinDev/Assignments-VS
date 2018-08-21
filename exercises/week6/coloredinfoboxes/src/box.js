import React from 'react'

const Box = (props) => {

    const styles = {
        backgroundColor: props.backgroundColor,
        height:100,
        width: 100,
        display:'inline-block',
    }
  
    return (
        <div style={styles} >
            <h1>
                BOX
            </h1>
            <p> {props.text}
            </p>
            
        </div>
    )
}

export default Box