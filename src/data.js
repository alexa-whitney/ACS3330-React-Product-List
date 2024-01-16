import data from '../data.json';

console.log(data);

const allCategories = data.map(obj => obj.category);

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!

// Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = data.reduce((obj, cat) => {
    // 'cat.category' gives the category of the current item
    // check if cat exists as a key on obj
    if (obj[cat.category]) {
        // If it exists, increment the value by 1
        obj[cat.category] += 1
    // else 
    } else {
        // If it doesn't exist, add the key and set the value to 1
        obj[cat.category] = 1;
    }
    return obj
  }, {}) // Initialize 'obj' as an empty object

export default data;
export { allCategories, categoriesUnique, categoriesWithCounts };