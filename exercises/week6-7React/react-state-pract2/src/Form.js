import React, {Component} from 'react'
   
class Form extends Component{
    constructor(){
        super()

        this.state = {
            nickName: '',
            goal: '',
            nameHistory: [],
        }   
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
        

    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                nameHistory: [...prevState.names, preState.myName]
            }
        })
    }

    

    render (){
        // console.log(this)
        return(
            <form>
                <input type="text" name="nickName" placeholder="Type Nick Name" value={this.state.nickName} onChange={this.handleChange}/>
                <input type="text" name="goal" placeholder="Weekly Goal" value={this.state.goal} onChange={this.handleChange} />
                <button>Submit</button>
            </form>

        )
    }
}

export default Form