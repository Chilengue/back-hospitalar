const express = require('express')
const route = express.Router();

const { add } = require('../controller/paciente.controller');

route.get('/', (req, res) => {
    res.json(
        {
            info: 'sucesso'
        }
    )
})
route.post('/add', add);

 route.patch('/', ()=>{})

route.put('/',()=>{})

route.delete('/:id', (req, res)=>
{
    // req.params(id)
    req.params.id()
})

module.exports = route;