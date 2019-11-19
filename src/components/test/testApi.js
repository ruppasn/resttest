import Axios from "axios";

export const getSomeData = (someInput) => {
    return Axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => response);
}