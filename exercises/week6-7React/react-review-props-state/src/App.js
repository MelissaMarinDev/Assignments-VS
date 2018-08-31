import React, { Component } from 'react';
import Form from './Form'
import InfoCard from './InfoCard'  //just displays


class App extends Component {
    constructor(){
        super()

        this.state = {
            ssn: '',
            mothersMaidenName: '',
            firstPet: '',
            data:[],
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
            e.preventDefault()
            const newCard = {
               
                ssn: this.state.ssn,
                mothersMaidenName: this.state.mothersMaidenName,
                firstPet: this.state.firstPet,
            }
            this.setState(prevState => ({
                data:[...prevState.data, newCard],// we are keeping all past information and with spread entering the new
                ssn: '',  // these will clear the inputs
                mothersMaidenName: '',
                firstPet: '',
            }))
    }

    render() {
        return (
            <div>
               <Form 
               handleChange={this.handleChange} 
               handleSubmit={this.handleSubmit}
               ssn={this.state.ssn} 
               mothersMaidenName={this.state.mothersMaidenName}
               firstPet={this.state.firstPet}
               />
                <div>
                    { this.state.data.map(info => <InfoCard {...info} />) }
                </div>
            </div>
        );
    }
}

export default App;