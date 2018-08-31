import React from 'react'
import {Link} from 'react-router-dom'

const ServicesAvailable = () => {

    return(
        <div>
            <Link to="/service/dog"> Dog </Link>
            <Link to="/service/pig"> Pig </Link>
            <Link to="/service/horse"> Horse </Link>
            <Link to="/service/chicken"> Chicken </Link>
        </div>
    )
}

export default ServicesAvailable