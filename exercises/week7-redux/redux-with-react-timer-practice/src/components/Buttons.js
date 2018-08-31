import React from 'react';
import {connect} from 'react-redux'
import {tick, stop, reset} from '../redux'

const Buttons = (props) => {
    const styles={
        button: {
            margin: '5px'
        }
    }

    let interval;

    const start =() => {
        if (!interval){
            interval = setInterval(props.tick, 10)
            }
    }

    const end = () => {
        props.stop()
        clearInterval(interval)
        interval = false
    
    }

    return (
        <div>
            <button onClick={start} style={styles.button} >Start</button>
            <button onClick={end} style={styles.button} >Stop</button>
            <button onClick={props.reset} style={styles.button} > Reset </button>
        </div>
    );
};

export default connect(null, {tick, stop, reset})(Buttons);