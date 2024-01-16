import data from './data.json';

const allCategories = data.map(obj => obj.category);

// Make a set from an array - all values of the set will be unique!
const categorieSet = new Set(allCategories) 
// Make an array from a set with Array.from()
const categoriesUnique = Array.from(categorieSet)

console.log(categoriesUnique);

export default data;