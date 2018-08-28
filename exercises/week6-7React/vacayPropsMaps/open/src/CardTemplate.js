import React, {Component} from 'react'
import './CardTemplate.css'

class CardTemplate extends Component {
    render(props){

        return (
            <div>
                <h3>{props.place}</h3>
                <h3>{props.timeToGo}</h3>
                <h2>{props.price}</h2>
            </div>
        );
    }
}

export default CardTemplate