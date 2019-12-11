/*************************************************
 * ❶ import { useContext } from react
 * ❷ import { ProductContext } from Contexts
 * ❸ Remove props
 * ❹ Destructure products, addItem, removeItem
 *************************************************/

 //❶ import { useContext } from react
import { useContext } from 'react'
import React from 'react';

// Components
import Product from './Product';

//❷ import { ProductContext } from Contexts
import { ProductContext } from './Contexts/ProductContext.js'

//❸ Remove props
const Products = () => {
	//❹ Destructure products, addItem, removeItem
	const { products, addItem, removeItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			
			{/*❸ Remove props*/}
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					removeItem={removeItem}
				/>
			))}
		</div>
	);
};

export default Products;
