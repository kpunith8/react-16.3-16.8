import axios from 'axios';

const getTodo = () => axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.data);

const loadTitle = () => getTodo().then(data => data.title.toUpperCase());

export { loadTitle };