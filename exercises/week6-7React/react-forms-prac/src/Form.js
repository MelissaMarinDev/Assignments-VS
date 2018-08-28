import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            fname:"",
            lname:"", 
        }
    }

    
    render(){
        return(
            <form>
                <input type="text" name="fname" value={this.state.fname} placeholder="First Name"/>
                <input type="text" name="lname" value={this.state.lname} placeholder="Last Name"/>
            </form>
        )
    }
}

export default Form