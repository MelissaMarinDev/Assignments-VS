import React from 'react'


function DisplayPage(props){
    const styles={
        figure:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        image:{
            height: "150px",
            border: "black solid 3px"
        }
    }

    return (
        <figure style={styles.figure}>
            <img style={styles.image} src={props.image}/>
            <figcaption>{props.name}</figcaption>

        </figure>    
    )
}

export default DisplayPage