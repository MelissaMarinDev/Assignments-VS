import React from 'react';

const Form = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}> 
             {/* /// React NEEDS to have 'name' 'value' & 'onChange' */}
            {/* <input type="text" name="ssn" value={} onChange={}/> */}
            <input 
                type="text" 
                name="ssn" 
                value={props.ssn} 
                onChange={props.handleChange}
                placeholder="Name"/>
            <input 
                type="text" 
                name="mothersMaidenName" 
                value={props.mothersMaidenName} 
                onChange={props.handleChange}
                placeholder="Mothers Maiden Name"/>
            <input 
                type="text" 
                name="firstPet" 
                value={props.firstPet} 
                onChange={props.handleChange}
                placeholder="Name first pet."/>
            <button>Submit</button>
        </form>
    );
};

export default Form;