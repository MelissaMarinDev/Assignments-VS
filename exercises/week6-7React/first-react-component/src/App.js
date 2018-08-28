//components are functions that return some JSX( HTMP/JS )
import React from 'react'
import HelloWorld from './HelloWorld'
import Questions from './Questions'
import Question1 from './Question1'
import Game from './Game'


const App = () => {
    return(
        <div>
            <HelloWorld/>
            <Questions/>
            <Question1/>
            <h3> Here i come world! </h3>
            <Game/>
        </div>
    )
}


export default App