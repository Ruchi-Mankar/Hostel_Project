import axios from './api/axios';

export default axios.create({
    baseURL: 'http://localhost:3000'
});
//changed from 3500 to 3000
