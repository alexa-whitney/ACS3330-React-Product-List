import React from 'react';
import './App.css';

function CategoryButton({ label, onClick, isSelected, count }) {
	// Use a ternary operator to define the class name
	const className = `category-button ${isSelected ? 'selected-category' : ''}`;

	return (
		<button className={className} onClick={onClick}>
			{label} {count != null && <span className="badge">{count}</span>}
		</button>
	);
}

export default CategoryButton;