# FastShip - API de Gestión de Envíos

## Descripción
FastShip es una API REST desarrollada con Node.js, Express y MongoDB para gestionar los envíos de una empresa de transporte.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Funcionalidades
- Registrar nuevos envíos.
- Consultar todos los envíos.
- Consultar envíos activos.
- Buscar un envío por su ID.
- Actualizar la información de un envío.
- Actualizar el estado de un envío.
- Eliminar envíos.

## Instalación

1. Clonar el repositorio.
2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con las siguientes variables:

```env
PORT=3000
MONGO_URI=TU_CADENA_DE_CONEXION
```

4. Iniciar el servidor:

```bash
npm run dev
```

## Rutas principales

| Método | Ruta | Función |
|---|---|---|
| POST | `/api/envios` | Registrar envío |
| GET | `/api/envios` | Listar envíos |
| GET | `/api/envios/activos` | Listar envíos activos |
| GET | `/api/envios/:id` | Buscar envío |
| PUT | `/api/envios/:id` | Actualizar envío |
| PATCH | `/api/envios/:id/estado` | Actualizar estado |
| DELETE | `/api/envios/:id` | Eliminar envío |

## Estados disponibles
- pendiente
- en tránsito
- entregado