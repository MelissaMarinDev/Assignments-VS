import React, {Component} from 'react'
import NewColorButton from './NewColorButton'

class App extends Component {
    constructor () {
        super()
        this.state={
            backgroundColor: "red"
        }
    }

    componentDidMount(){ //if something needs to happen when window loads.
        window.addEventListener("keydown", (e) => {
            if (e.code === "KeyQ"){
                this.setState({
                    backgroundColor: "blue",
                })

            } else if (e.code === "KeyW"){
                this.setState({
                    backgroundColor: "red",
                })
            }

        })
    }
    componentWillUnmount(){
        window.removeEventListener("keydown", null)
    }

    render(){
        const styles = {
            container:{
                backgroundColor: this.state.backgroundColor,
                color: "yellow"
            },
           
        }

        return(
            <div style={ styles.container }>
            Using componentDidMount and componentWillMount
            
                <NewColorButton />
            </div>
        )
    }
}

export default App