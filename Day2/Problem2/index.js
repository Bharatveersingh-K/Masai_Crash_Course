 const axios = require('axios');

 
async function fetchDataFromAPI() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('API Data:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

 
fetchDataFromAPI();
