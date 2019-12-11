/*******************************************************************************
 * ❶ import useEffect from react 
 * ❷ import ProductContext and CartContext from Contexts
 * ❸ Utilize localStorage to check if item is in the cart
 * ❹ Use useEffect to set a strigified cart item in the cart
 * ❺ Apply a spread operator to append items to the cart without mutating state
 * ❻ Use filter to remove an item
 * ❼ Wrap the return statements with Context Providers
 *******************************************************************************/

//❶ import useEffect from react 
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//❷ import ProductContext and CartContext from Contexts
import  { ProductContext } from './components/Contexts/ProductContext.js';
import { CartContext } from './components/Contexts/CartContext.js';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	//❸ Utilize localStorage to check if item is in the cart
	const localCart = JSON.parse(localStorage.getItem('cart'))
	const [products] = useState(data);

	//ternary operator to check if item is in cart
	const [cart, setCart] = useState(() =>
		!localCart ? []
		:
		localCart
		);//end of useState

	//❹ Use useEffect to set a strigified cart item in the cart
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);//end of useEffect

	const addItem = item => {
		// add the given item to the cart
		//❺ Apply a spread operator to append items to the cart without mutating state
		setCart([...cart, item]);
	};

	//❻ Use filter to remove an item
	const removeItem = itemTitle => {
		setCart(cart.filter(item => item.title !== itemTitle))
	}

	
	return (
		// ❼ Wrap the return statements with Context Providers
		<ProductContext.Provider value={ {products, addItem } }>
			<CartContext.Provider value={ {cart, removeItem } }>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
