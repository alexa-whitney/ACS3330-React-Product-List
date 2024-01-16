import { useState } from 'react';
import './App.css';
import data, { namesAndCategories } from './data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Event handler for clicking on a category
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // Filter the list of products based on the selected category
  const filteredData = selectedCategory === 'All' 
    // If the selected category is 'All', return all the products
    ? data 
    // Otherwise, return only the products whose category matches the selected category
    : data.filter(product => product.category === selectedCategory);

    return (
      <div className="App">
        <header className="App-header">
          {/* Display categories as buttons */}
          <div className="category-buttons">
            {namesAndCategories.map((category, index) => (
              <button 
                key={index} 
                className="category-button" 
                onClick={() => handleCategoryClick(category.name)} // Set the category when clicked
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* Loop through the filtered data and display each product */}
          <div className="product-list">
            {filteredData.map((product) => (
              <div key={product.id} className="product">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
  
  export default App;
