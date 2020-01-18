const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs',async (request, response) => {
    const { github_username } = (request.body);

    const response = await axios.get(`http://api.github.com/users/${github_username}`);

    
})

 module.exports = routes;