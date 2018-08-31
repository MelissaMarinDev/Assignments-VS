import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Navbar;













// import React from 'react'
// import {Link} from 'react-router-dom'

// const Navbar = () => {
//     const styles={
//         fontSize: '30px',
//         backgroundColor: 'lightblue',
//         height: '20%',
//     }
//     return(
//         <div className="nav" style={styles}>
//             <Link to='/'>Home</Link>
//             <Link to='/about'>About</Link>
//             <Link to='/contact'>Contact</Link>
//             <Link to='/services'>Services</Link>
//         </div>
//     )
// }


// export default Navbar