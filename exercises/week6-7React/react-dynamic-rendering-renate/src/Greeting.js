import React, {Component} from 'react';
import CurrentStatus from "./CurrentStatus"
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4' 

class Greeting extends Component {
   constructor (){
       super()

       this.state = {
            status: true,
            isHappy: true,
            status3: true,
            status4: true

       }
   }

    handleClick = e => {
        this.setState(prevState => {
           return {status: !prevState.status}
        })
    }
    myhandleClick = (e) => {
        this.setState(prevState => {
            return {isHappy: !prevState.isHappy}
        })
    }
    handle3Click = (e) => {
        this.setState(prevState => {
            return{status3: !prevState.status3}
        })
    }
    handle4Change = (e) => {
        this.setState(prevState => {
            return{status4: !prevState.status4}
        })
    }
    render() {
        return (
            <div>
                <CurrentStatus status={this.state.status} thisThing={this.handleClick}/>
                <Button2 isHappy={this.state.isHappy} myFunc={this.myhandleClick}/>
                <Button3 status3={this.state.status3} stat3Funk={this.handle3Click}/>
                <Button4 status4={this.state.status4} funk4={this.handle4Change} />
            </div> 
        )
            
        
    }
}


export default Greeting;