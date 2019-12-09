/******************************************************
 * ❶ add button to remove button onClick
 ******************************************************/

import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				{/* ❶ add button to remove button onClick */}
				<button onClick={() => props.removeItem(props.title)}>Remove from Cart</button>
			</div>
		</div>
	);
};

export default Item;
