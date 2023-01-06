const { Router } = require('express');

const ClientController = require('./controllers/ClientControllers');
const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "ta ligado po" })
});

routes.post('/clientes', ClientController.store)
routes.get('/clientes', ClientController.index)
routes.get('/clientes/:id', ClientController.show)
routes.put('/clientes/:id', ClientController.update)
routes.delete('/clientes/:id', ClientController.destroy)

module.exports = routes;