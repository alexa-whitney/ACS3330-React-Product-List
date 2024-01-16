import React from 'react';

function CategoryButton({ label, onClick }) {
  return (
    <button className="category-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default CategoryButton;