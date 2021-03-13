
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    pessoa = {
        nome: 'Gabriel',
        idade: 20,
    }
    res.send(pessoa)
});

module.exports = router;
