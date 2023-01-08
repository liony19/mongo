const { render } = require('../app');
const TituloModel = require('../models/TituloModel')

class TituloController {
    async store(req, res) {
        const createdTitle = await TituloModel.create(req.body);

        return res.status(200).json(createdTitle);
    }

    async index(req, res) {
        const Titulo = await TituloModel.find();

        return res.status(200).json(Titulo);
    }

    async show(req, res) {
        try {
         const {id} = req.params;

         const Titulo = await TituloModel.findById(id);

         if (!Titulo) {
            return res.status(404).json({message: "TItle does not exist"});
         }

         return res.status(200).json(Titulo)


        
        }catch (error) {
            return res.status(404).json({message: "Title does not exist"});
        }
    }

    async update(req, res) {
        try{
         const {id} = req.params;

         await TituloModel.findByIdAndUpdate(id, req.body)

         return res.status(200).json({ message: "foi :D"})
         } catch (error) {
         return res.status(404).json({ message: "falhou visse"})
        }
    }

    async destroy(req, res) {
       try {
        const {id} = req.params;

        const TitleDeleted = await TituloModel.findByIdAndDelete(id);

        if(!TitleDeleted){
            return res.status(404).json({ message: "falhou visse"});
        }

        return res.status(200).json({ message: "deletado com sucessooooo"})
    } catch (error) {
        return res.status(404).json({ message: "falhou visse"})
    }
    } 

}

module.exports = new TituloController();