require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/database');
const enviosRoutes = require('./routes/envios');

const app = express();

// Middleware para recibir datos JSON
app.use(express.json());
app.use('/api/envios', enviosRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de FastShip',
        estado: 'Servidor funcionando correctamente'
    });
});

// Iniciar servidor y conectar MongoDB
const iniciarServidor = async () => {
    try {
        await conectarDB();

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Servidor ejecutándose en el puerto ${process.env.PORT || 3000}`);
        });

    } catch (error) {
        console.error('Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

iniciarServidor();