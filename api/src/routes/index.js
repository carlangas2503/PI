const { Router } = require('express');
const dogsRoute = require('./dogsRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogsRoutes',dogsRoute)


module.exports = router;
