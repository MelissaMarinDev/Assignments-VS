import React, {Component} from 'react'
import Toggle from './Toggle'
import Super from './Super'
import Button5 from './Button5'

class Body extends Component {
    constructor(){
        super()

        this.state = {
            status: true,
            fname: '',
            lname: '',
            age:0,
            superStatus: true,
            status5: true
        }
    }

    handleClick = (e) => {
       this.setState(prevState => {
           return {status: !prevState.status}
       })
        
    }
    handleSupClick = (e) => {
        this.setState(prevState => {
            return {superStatus: !prevState.superStatus}
        })
    }

    handle5change = (e) => {
        this.setState(prevState => {
            return {status5: !prevState.status5}
        })
    }
    render(){
        return(
            <div>
                <Toggle myObject={this.state.status} button={this.handleClick}/>
                <Super sstatus={this.state.superStatus} cLick={this.handleSupClick}/>
                <Button5 status5={this.state.status5} changeState={this.handle5Click}/>
           </div>
        )
    }
}

export default Body