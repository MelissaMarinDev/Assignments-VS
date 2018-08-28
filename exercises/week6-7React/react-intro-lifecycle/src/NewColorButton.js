import React from 'react'

class NewColorButton extends React.Component{

    constructor(){
        super()

        this.state={
            backgroundColor: "pink",
        }
    }

    componentDidMount(){
            window.addEventListener("keydown", (e) => {
               
            })
    }
    componentWillUnmount(){

    }
    handleClick(){
        this.setState({
            backgroundColor: "green"
        })
    }

    render(){

        const styles = {
            div: {
                backgroundColor: "beige",
                color: "aquamarine"
            }
        }

        return(
            
            <div style={styles.div}>
            <button onClick={this.handleClick}>
                I am a button
            </button>
            </div>
        )
    }
}

export default NewColorButton