const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/productos', (req, res) => {
    const response = {
        mensaje: 'Listar productos!'
    }
    res.json(response);
})

app.get('/api/productos/:id', (req, res) => {
    const response = {
        mensaje: 'Mostrar detalle producto: '+req.params.id
    }
    res.json(response);
})

app.post('/api/productos', (req, res) => {
    const response = {
        mensaje: 'Guardar producto',
        datos: req.body,
    }
    res.json(response);
})

app.put('/api/productos/:id', (req, res) => {
    const response = {
        mensaje: 'Actualizar producto: '+req.params.id,
        datos: req.body,
    }
    res.json(response);
})

app.delete('/api/productos/:id', (req, res) => {
    const response = {
        mensaje: 'Eliminar producto: '+req.params.id,
    }
    res.json(response);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
