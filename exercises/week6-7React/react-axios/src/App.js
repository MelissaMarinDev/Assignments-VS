import React from 'react'
import axios from 'axios'
import Person from './Person'

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            data:[],
            backgroundColor:"white", //eyes
            fontColor: "black", //gender
            height: "200px" //height


        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people').then(response => {
            console.log(response)
            this.setState({
                data: response.data.results
            })
        })
    }
    handleEyeClick(eyeColor){
        // console.log(eyeColor, gender)
        this.setState({
            backgroundColor: eyeColor
        })
    }
    handleGenderClick(gender){
        console.log(gender)
        const isMale = gender === 'male' ? "blue" : "pink"
        this.setState({
            fontColor: isMale
        })
    }
    
    handleHeightClick(height){
        // console.log(height)
        
        this.setState({
            height: `${height}px`
        })
    }

    render(){
        const mappedStarwarsFolk = this.state.data.map(person =>   /* you can send the whole opbects for {...person} with the key={person.url}*/
                <Person 
                key={person.url} 
                {...person} 
                eyeFunction={() => this.handleEyeClick(person.eye_color)} 
                stateEye={this.state.backgroundColor}
                genderFunction={() => this.handleGenderClick (person.gender)}
                stateGender={this.state.fontColor}
                heightFunction={() => this.handleHeightClick(person.height)}
                stateHeight={this.state.height}
                
                
                />
            
            )

        return(
        <div>
            {mappedStarwarsFolk}
        </div>
        )
    }


}

export default App






