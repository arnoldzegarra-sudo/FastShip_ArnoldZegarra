const Envio = require('../models/Envio');




// Registrar un nuevo envío
const registrarEnvio = async (req, res) => {
    try {
        const nuevoEnvio = new Envio(req.body);

        await nuevoEnvio.save();

        res.status(201).json({
            mensaje: 'Envío registrado correctamente',
            envio: nuevoEnvio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al registrar el envío',
            error: error.message
        });
    }
};

const obtenerEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();

        res.status(200).json(envios);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar los envíos',
            error: error.message
        });
    }
};

const obtenerEnviosActivos = async (req, res) => {
    try {
        const envios = await Envio.find({
            estado: { $in: ['pendiente', 'en tránsito'] }
        });

        res.status(200).json(envios);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar envíos activos',
            error: error.message
        });
    }
};


// Buscar un envío por ID
const obtenerEnvioPorId = async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json(envio);

    } catch (error) {
        res.status(400).json({
            mensaje: 'ID inválido o error al buscar el envío',
            error: error.message
        });
    }
};


// Actualizar información de un envío
const actualizarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío actualizado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el envío',
            error: error.message
        });
    }
};

// Actualizar el estado del envío
const actualizarEstado = async (req, res) => {
    try {
        const { estado } = req.body;

        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            { estado },
            {
                new: true,
                runValidators: true
            }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Estado actualizado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el estado',
            error: error.message
        });
    }
};


// Eliminar un envío
const eliminarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndDelete(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío eliminado correctamente'
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar el envío',
            error: error.message
        });
    }
};

module.exports = {
    registrarEnvio,
    obtenerEnvios,
    obtenerEnviosActivos,
    obtenerEnvioPorId,
    actualizarEnvio,
    actualizarEstado,
    eliminarEnvio
};

