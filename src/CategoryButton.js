import React from 'react';
import './App.css';

function CategoryButton({ label, onClick, isSelected }) {
	// Use a ternary operator to define the class name
	const className = `category-button ${isSelected ? 'selected-category' : ''}`;

	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
}

export default CategoryButton;