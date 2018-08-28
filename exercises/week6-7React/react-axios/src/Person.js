import React from 'react'

// functional pomponents are suppose to receive props because their purpose is to receive and display.
const Person = props => { 

    const style= {
        div: {
            border: "2px dotted black",
            width: "400px",
            marginBottom: '15px',
            backgroundColor: props.stateEye,
            color: props.stateGender,
            height: props.stateHeight
        }
    }

return(
    

    <div style={style.div}>
    
         <h1> {props.name} </h1>

        <button onClick={props.eyeFunction}>Click for eye color</button>
        <button onClick={props.genderFunction}>Click for gender color</button>
        <button onClick={props.heightFunction}>Click for height</button>
    </div>
)
}

export default Person