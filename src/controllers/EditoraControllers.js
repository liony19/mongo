const { render } = require('../app');
const EditoraModel = require('../models/EditoraModel')

class EditoraController {
    async store(req, res) {
        const createdEditora = await EditoraModel.create(req.body);

        return res.status(200).json(createdEditora);
    }

    async index(req, res) {
        const Editoras = await EditoraModel.find();

        return res.status(200).json(Editoras);
    }

    async show(req, res) {
        try {
         const {id} = req.params;

         const Editoras = await EditoraModel.findById(id);

         if (!Editoras) {
            return res.status(404).json({message: "Client does not exist"});
         }

         return res.status(200).json(Editoras)


        
        }catch (error) {
            return res.status(404).json({message: "Client does not exist"});
        }
    }

    async update(req, res) {
        try{
         const {id} = req.params;

         await EditoraModel.findByIdAndUpdate(id, req.body)

         return res.status(200).json({ message: "foi :D"})
         } catch (error) {
         return res.status(404).json({ message: "falhou visse"})
        }
    }

    async destroy(req, res) {
       try {
        const {id} = req.params;

        const EditoraDeleted = await EditoraModel.findByIdAndDelete(id);

        if(!EditoraDeleted){
            return res.status(404).json({ message: "falhou visse"});
        }

        return res.status(200).json({ message: "deletado com sucessooooo"})
    } catch (error) {
        return res.status(404).json({ message: "falhou visse"})
    }
    } 

}

module.exports = new EditoraController();