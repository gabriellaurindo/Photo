
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send({
        API: "Teste Node.js", 
        Descrição:"Feita para estudo."
    })
});

module.exports = router;
