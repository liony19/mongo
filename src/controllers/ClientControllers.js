const { render } = require('../app');
const ClientModel = require('../models/ClientModel')

class ClientController {
    async store(req, res) {
        const createdClient = await ClientModel.create(req.body);

        return res.status(200).json(createdClient);
    }

    async index(req, res) {
        const clientes = await ClientModel.find();

        return res.status(200).json(clientes);
    }

    async show(req, res) {
        try {
         const {id} = req.params;

         const clientes = await ClientModel.findById(id);

         if (!clientes) {
            return res.status(404).json({message: "Client does not exist"});
         }

         return res.status(200).json(clientes)


        
        }catch (error) {
            return res.status(404).json({message: "Client does not exist"});
        }
    }

    async update(req, res) {
        try{
         const {id} = req.params;

         await ClientModel.findByIdAndUpdate(id, req.body)

         return res.status(200).json({ message: "foi :D"})
         } catch (error) {
         return res.status(404).json({ message: "falhou visse"})
        }
    }

    async destroy(req, res) {
       try {
        const {id} = req.params;

        const clientDeleted = await ClientModel.findByIdAndDelete(id);

        if(!clientDeleted){
            return res.status(404).json({ message: "falhou visse"});
        }

        return res.status(200).json({ message: "deletado com sucessooooo"})
    } catch (error) {
        return res.status(404).json({ message: "falhou visse"})
    }
    } 

}

module.exports = new ClientController();