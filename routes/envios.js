
const express = require('express');
const router = express.Router();

const {
    registrarEnvio,
    obtenerEnvios,
    obtenerEnviosActivos,
    obtenerEnvioPorId,
    actualizarEnvio,
    actualizarEstado,
    eliminarEnvio
} = require('../controllers/envioController');

// Registrar un nuevo envío
router.post('/', registrarEnvio);

// Consultar envíos activos
router.get('/activos', obtenerEnviosActivos);

// Consultar todos los envíos
router.get('/', obtenerEnvios);

// Buscar un envío por ID
router.get('/:id', obtenerEnvioPorId);

// Actualizar información de un envío
router.put('/:id', actualizarEnvio);

// Actualizar estado del envío
router.patch('/:id/estado', actualizarEstado);

// Eliminar un envío
router.delete('/:id', eliminarEnvio);

module.exports = router;
