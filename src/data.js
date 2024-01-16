import data from './data.json';

const allCategories = data.map(obj => obj.category);

// Make a set from an array - all values of the set will be unique!
const categorieSet = new Set(allCategories) 
// Make an array from a set with Array.from()
const categoriesUnique = Array.from(categorieSet)

const categoriesWithCounts = data.reduce((obj, item) => {
  // 'item.category' is the category of the current item
  // Check if this category already exists as a key in 'obj'
  if (obj[item.category]) {
    // If it exists, increment the count
    obj[item.category] += 1;
  } else {
    // If it doesn't exist, add the key with a value of 1
    obj[item.category] = 1;
  }
  return obj;
}, {}); // Initialize 'obj' as an empty object

// Use Reduce to make an array of objects that have a name and a count
const namesAndCategories = categoriesUnique.map(name => {
  // return an object here with the name and count
  return {
    name: name,
    count: categoriesWithCounts[name]
  }
})

console.log(namesAndCategories);

export default data;