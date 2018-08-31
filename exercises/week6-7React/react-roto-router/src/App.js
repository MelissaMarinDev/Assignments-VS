import React, { Component } from 'react';
import Navbar from './Navbar'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import About from './About'


class App extends Component {
    render() {
        return (
            <div >
                <Navbar >
                    <Switch>
                        <Route exact path="/" Component={Home}/>
                        <Route path="/about" Component={About}/>
                        <Route path='/services' Component={Services} />
                        <Route path='/contact' Component={Contact} />
                    </Switch>
                </Navbar>
            </div>
        );
    }
}

export default App;













// import React from 'react'
// import { Switch, Route } from 'react-router-dom'
// import Navbar from './Navbar'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Services from './Services'
// import Footer from './Footer'


// const App = () => {
   
//     return(
//         <div >
//             <Navbar />
//                 <Switch >
//                     <Route exact path='/' component={Home}/>
//                     <Route path='/About' component={About}/>
//                     <Route path='/Contact' component={Contact}/>
//                     <Route path='/Services' component={Services}/>
//                 </Switch>      
//             <Footer />
//         </div>    
//     )
// }



// export default App