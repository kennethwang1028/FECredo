import axios from 'axios';

const getCategory = (categoryMain) => axios(`http://localhost:3001/category/${categoryMain}`)
  .then((res) => res.data)
  .catch((err) => console.log(err));
export default getCategory;
