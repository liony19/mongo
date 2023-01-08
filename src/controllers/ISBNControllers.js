const { render } = require('../app');
const ISBNModel = require('../models/ISBNModel')

class ISBNController {
    async store(req, res) {
        const createdISBN = await ISBNModel.create(req.body);

        return res.status(200).json(createdISBN);
    }

    async index(req, res) {
        const ISBN = await ISBNModel.find();

        return res.status(200).json(ISBN);
    }

    async show(req, res) {
        try {
         const {id} = req.params;

         const ISBN = await ISBNModel.findById(id);

         if (!ISBN) {
            return res.status(404).json({message: "does not exist"});
         }

         return res.status(200).json(ISBN)


        
        }catch (error) {
            return res.status(404).json({message: "does not exist"});
        }
    }

    async update(req, res) {
        try{
         const {id} = req.params;

         await ISBNModel.findByIdAndUpdate(id, req.body)

         return res.status(200).json({ message: "foi :D"})
         } catch (error) {
         return res.status(404).json({ message: "falhou visse"})
        }
    }

    async destroy(req, res) {
       try {
        const {id} = req.params;

        const ISBNDeleted = await ISBNModel.findByIdAndDelete(id);

        if(!ISBNDeleted){
            return res.status(404).json({ message: "falhou visse"});
        }

        return res.status(200).json({ message: "deletado com sucessooooo"})
    } catch (error) {
        return res.status(404).json({ message: "falhou visse"})
    }
    } 

}

module.exports = new ISBNController();