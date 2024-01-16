import data from '../data.json';

const allCategories = data.map(obj => obj.category);

console.log(allCategories)

export default data;