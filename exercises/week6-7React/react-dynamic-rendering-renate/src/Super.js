import React from 'react'

const Super = (props) => {
    return (
        <div>
            {props.sstatus ?
            <h1 onClick={props.cLick}>Super on</h1>
            :
            <h1 onClick={props.cLick}>Super OFF</h1>
            }
        </div>
    )

    
}

export default Super