import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getAllPhotos = () => axios.get(`${BASE_URL}/photos`);

export default {
    getAllPhotos
};
