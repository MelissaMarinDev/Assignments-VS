import React from 'react'
import axios from 'axios'
import DisplayPage from './DisplayPage'

class App extends React.Component {
    constructor (){
        super()
        this.state ={
            name: '',
            image: '',
            data:[],
        }
    }

    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            // console.log(response.data)
            this.setState({
                data:response.data
            })
            
        })
    }

    render(){
        console.log(this.state.data)
        const mapHitList = this.state.data.map((person, i) => {
            // return info through attributes to the child component Display page.
            return(
                <DisplayPage  
                {...person}
                />
            )
            
        })



        return(
            <div>
               
                {mapHitList}
            </div>
        )
    }


}
export default App
















// import React from 'react'
// import axios from 'axios'

// class App extends React.Component{
//     constructor(){
//         super()

//         this.state= {}
//     }

    // componentDidMount(){
    //     axios.get('https://swapi.co/api/people/').then (response => {
    //         console.log(response.data)
            
    //     }).catch(error){
    //         console.log(error)
    //     }
    // }

//     render(){


//         return(<div>I am the app</div>)
//     }
// }


// export default App