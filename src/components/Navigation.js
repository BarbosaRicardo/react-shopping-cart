/*********************************************
 * ❶ import { useContext } from react
 * ❷ import { CartContext } from Contexts
 * ❸ Remove props
 * ❹ Destructure cart 
 *********************************************/

//❶ import { useContext from react }
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//❷ import { CartContext } from Contexts
import { CartContext } from './Contexts/CartContext.js';

//❸ Remove props
const Navigation = () => {
	
	//❹ Destructure cart 
	const { cart } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				{/*❸ Remove props*/}
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
