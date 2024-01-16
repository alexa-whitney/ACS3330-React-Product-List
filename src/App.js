import { useState } from 'react';
import './App.css';
import data, { namesAndCategories } from './data';
import CategoryButton from './CategoryButton';
import Product from './Product';

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
            <CategoryButton
              key={index}
              label={category.name}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>
        {/* Loop through the filtered data and display each product */}
        <div className="product-list">
          {filteredData.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
