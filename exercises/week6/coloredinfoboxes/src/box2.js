import React from 'react'

const Box2 = (props) => {
    console.log(props)
    const styles={
        backgroundColor: props.backgroundColor,
        height: 100,
        width:100,
        display:'inline-block'
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.sound}</h3>
        </div>
    )

}

export default Box2