import React, {Component}from 'react'
import CardTemplate from './CardTemplate'


class CardList extends Component {
  vacationSpots = [   
            {
              place: "Dallas, Texas",
              price: 40,
              timeToGo: "Spring"
            },{
              place: "Cancun, MX",
              price: 900,
              timeToGo: "Spring"
            },{
              place: "California",
              price: 1200,
              timeToGo: "Fall"
            },{
              place: "New Zealand",
              price: 1100,
              timeToGo: "Summer"
            },{
              place: "Merida, MX",
              price: 400,
              timeToGo: "Winter"
            }
          ]
  
  renders() {
    const mapped = this.vacationSpots.map((indexValue, i) => {
      return (
        <CardTemplate 
            key={indexValue.place + 1}
            place={indexValue.place}
            timeToGo={indexValue.timeToGo}
            price={indexValue.price}
        />
      )
    })


    return(
      <div>
        {mapped}
      </div>
    )
  }

       
    
}

export default CardList