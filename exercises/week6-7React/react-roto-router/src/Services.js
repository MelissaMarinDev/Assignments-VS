import React from 'react';
import ServicesAvailable from './ServicesAvailable';
import {Switch, Route} from 'react-router-dom'
import Dog from './Services/Dog'
import Chicken from './Services/Chicken'
import Pig from './Services/Pig'
import Horse from './Services/Horse'

const Services = () => {


    return(
        <div>
            <ServicesAvailable />
                <Switch>
                    <Route path="/service/dog" component={Dog} />
                    <Route path="/service/chicken" component={Chicken}/>
                    <Route path="/service/horse" component={Horse} />
                    <Route path="/service/pig" component={Pig}/>
                </Switch>
        </div>
    )
}

export default Services;