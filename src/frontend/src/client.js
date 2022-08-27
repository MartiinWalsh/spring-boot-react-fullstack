const axios = require('axios').default;

export const getAllStudents = () =>
axios.get('/api/v1/students')
    .then(function (response) {
        console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
    })