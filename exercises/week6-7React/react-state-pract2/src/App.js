import React, { Component } from 'react';
import Form from './Form'


class App extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            age: '',
            names: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState => {
          return{
            names: [...prevState.names, prevState.myName]
          }
        })
        //console.log(this.state) // this is logging my function handleSubmit
    }

    render() { 
      //console.log(this) // This will show me the options of the Class Components
        return (
          <div>
             
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                  <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                  <button>Submit</button>
                  
                  <h1>Name: {this.state.myName}</h1>
                  <h1>Age: {this.state.age}</h1>
            </form>
            <Form />
          </div>  
        );
    }
}

export default App;