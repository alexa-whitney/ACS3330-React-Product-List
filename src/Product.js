import React from 'react';

function renderStars(rating) {
    const roundedRating = Math.round(rating);
    return '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
}

function Product({ name, category, price, units, rating }) {
    return (
        <div className="product">
            <h2 className="product-name">{name}</h2>
            <p className="product-category">{category}</p>
            <p className="product-price">{price}</p>
            <p className="product-units">Units: {units}</p>
            <p className="product-rating">{renderStars(rating)}</p>
        </div>
    );
}

export default Product;