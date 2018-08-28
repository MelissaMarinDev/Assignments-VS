import React from 'react'

const Child = (props) => {
    
    const quote = () => {
        alert(props.catchPhrase)
    }
    
    
    return(


        <div onClick={quote}>
            {/* <div>{props.catchPhrase}</div> */}
            <img src={props.img} alt={props.name}/>
            <div>{props.name}</div>
        </div >
    )
}

export default Child