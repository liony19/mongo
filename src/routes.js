const { Router } = require('express');

const ClientController = require('./controllers/ClientControllers');
const TituloController = require('./controllers/TituloControllers');
const EditoraController = require('./controllers/EditoraControllers');
const ISBNController = require('./controllers/ISBNControllers');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "ta ligado po" })
});

routes.post('/clientes', ClientController.store)
routes.get('/clientes', ClientController.index)
routes.get('/clientes/:id', ClientController.show)
routes.put('/clientes/:id', ClientController.update)
routes.delete('/clientes/:id', ClientController.destroy)

routes.post('/titulo', TituloController.store)
routes.get('/titulo', TituloController.index)
routes.get('/titulo/:id', TituloController.show)
routes.put('/titulo/:id', TituloController.update)
routes.delete('/titulo/:id', TituloController.destroy)

routes.post('/editora', EditoraController.store)
routes.get('/editora', EditoraController.index)
routes.get('/editora/:id', EditoraController.show)
routes.put('/editora/:id', EditoraController.update)
routes.delete('/editora/:id', EditoraController.destroy)

routes.post('/isbn', ISBNController.store)
routes.get('/isbn', ISBNController.index)
routes.get('/isbn/:id', ISBNController.show)
routes.put('/isbn/:id', ISBNController.update)
routes.delete('/isbn/:id', ISBNController.destroy)


module.exports = routes;