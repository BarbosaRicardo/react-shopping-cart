import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Context
import  { ProductContext } from './components/Contexts/ProductContext.js';
import { CartContext } from './components/Contexts/CartContext.js';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	//local storage 
	const localCart = JSON.parse(localStorage.getItem('cart'))
	const [products] = useState(data);
	const [cart, setCart] = useState(() =>
		!localCart ? []
		:
		localCart
		);//end of useState

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	//remove an item using filter 
	const removeItem = itemTitle => {
		setCart(cart.filter(item => item.title !== itemTitle))
	}

	
	return (
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
