import data from './data.json';

const allCategories = data.map(obj => obj.category);

export default data;
export { allCategories };