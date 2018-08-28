import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
       
        const pets = props.pets.map((indexValue, indexNum)=>
            <Pet 
            key={`${indexValue} ${indexNum}`}
            name={indexValue.name}
            breed={indexValue.breed}
            />
        )

        const styles = {
            span:{
                fontStyle: "italic",
                fontSize: "10px"
            }
            
        }
           
    return (
        <div>
            <h1>{props.name}<span style={styles.span}>Age: {props.age}</span></h1>
            <div className="petDisplay">Pets:<span> {pets}</span></div>
        </div>
    )
}

export default Friend