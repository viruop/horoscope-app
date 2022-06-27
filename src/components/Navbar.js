import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () =>{

	return(
	<>
	<div className="nav">
    <Link className="span" to="/user"> User </Link>
    <Link className="span" to="/another"> Another </Link>
    <Link className="span" to="/"> Home </Link>
    </div>
	</>
	)

}



export default Navbar;
