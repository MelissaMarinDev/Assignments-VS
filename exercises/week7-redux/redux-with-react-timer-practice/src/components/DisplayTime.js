import React from 'react';
import {connect} from 'react-redux'

const DisplayTime = (props) => {
    const styles={
        div: {
            width: '150px',
            height: '60px',
            border: 'black 1px solid'
        }
    }
    
    return (
        <div style={styles.div}>
           <h1> {props.minutes}:{props.seconds}:{props.milliseconds} </h1>
        </div>
    );
};

export default connect(state=>state, {})(DisplayTime)