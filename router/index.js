const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlControllers');

module.exports = () => {
    router.get('/', urlController.home);
    router.post('/', urlController.agregarUrls);

    router.get('/:url', urlController.redireccionarUrl)
    return router;
    
}