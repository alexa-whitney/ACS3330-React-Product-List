import data from './data.json';

const allCategories = data.map(obj => obj.category);

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  
// Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)

export default data;
export { allCategories, categoriesUnique };