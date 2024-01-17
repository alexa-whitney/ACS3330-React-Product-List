import { useState } from 'react';
import './App.css';
import data, { namesAndCategories } from './data';
import CategoryButton from './CategoryButton';
import Product from './Product';

function App() {
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  // Event handler for clicking on a category
  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'All') {
      setSelectedCategories(['All']);
    } else {
      setSelectedCategories(prevCategories => {
        if (prevCategories.includes(categoryName)) {
          return prevCategories.filter(category => category !== categoryName);
        } else {
          return [...prevCategories.filter(category => category !== 'All'), categoryName];
        }
      });
    }
  };

  // Filter the list of products based on the selected category
  const filteredData = selectedCategories.includes('All')
    // If the selected category is 'All', return all the products
    ? data
    // Otherwise, return only the products whose category matches the selected category
    : data.filter(product => selectedCategories.includes(product.category));

  // STRETCH: Calculate the total sum of all product prices
  const totalSum = data.reduce((sum, item) => {
    const price = parseFloat(item.price.slice(1));
    return sum + price;
  }, 0)

  // STRETCH: Calculate the total sum of all product prices in the selected category
  const selectedSum = filteredData.reduce((sum, item) => {
    const price = parseFloat(item.price.slice(1));
    return sum + price;
  }, 0);

  // STRETHC: Calculate count for each category
  const categoryCounts = namesAndCategories.map(category => ({
    name: category.name,
    count: data.filter(item => item.category === category.name).length
  }));

  return (
    <div className="App">
      <header className="App-header">
        <div className="category-buttons">
          {/* Add an "All" button to the list of category buttons */}
          <CategoryButton
            label="All"
            onClick={() => handleCategoryClick('All')}
            isSelected={selectedCategories.includes('All')}
          />
          {/* Display categories as buttons */}
          {categoryCounts.map((category, index) => (
            <CategoryButton
              key={index}
              label={category.name}
              count={category.count}
              onClick={() => handleCategoryClick(category.name)}
              isSelected={selectedCategories.includes(category.name)}
            />
          ))}
        </div>
        {/* Display total sum */}
        <p>Total Sum of All Products: ${totalSum.toFixed(2)}</p>
        {/* Display sum for selected produts */}
        <p>Total Sum of Selected Products: ${selectedSum.toFixed(2)}</p>
        {/* Loop through the filtered data and display each product */}
        <div className="product-list">
          {filteredData.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              units={product.units} // STRETCH: Display the number of units
              rating={product.rating} // STRETCH: Display the rating as stars
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
