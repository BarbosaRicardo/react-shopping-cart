/*********************************************
 * ❶ import { useContext } from react
 * ❷ import { CartContext } from Contexts
 * ❸ Remove props
 * ❹ Destructure cart, removeItem 
 * ❺ add removeItem to the map function 
 *********************************************/

//❶ import { useContext } from react
import { useContext } from 'react';
import React from 'react';

// Components
import Item from './ShoppingCartItem';

//❷ import { CartContext } from Contexts
import { CartContext } from './Contexts/CartContext.js';

//❸ Remove props
const ShoppingCart = () => {
	//❹ Destructure cart, removeItem 
	const { cart, removeItem } = useContext(CartContext)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		// ❸ Remove props
		<div className="shopping-cart">
			{/* ❺ add removeItem to the map function  */}
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
