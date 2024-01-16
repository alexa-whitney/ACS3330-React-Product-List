import './App.css';
import { namesAndCategories } from './data'

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
      </header>
    </div>
  );
}

export default App;
