import './App.css';
import data, { namesAndCategories } from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display categories as buttons */}
        <div className="category-buttons">
          {namesAndCategories.map((category, index) => (
            <button key={index} className="category-button">
              {category.name}
            </button>
          ))}
        </div>
        {/* Display the list of products */ }
        <div className="product-list">
          {data.map((product) => (
            <div key={product.id} className="product">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </header >
    </div >
  );
}

export default App;
