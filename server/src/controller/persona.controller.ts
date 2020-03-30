import express, { Request, Response } from "express";
import { PersonaModel } from "@model/persona.model";
import { throws } from "assert";

const router = express.Router();


router.get('/all', async (req, res) => {
    try {
        let data = await PersonaModel.getPersonas();
        res.json(data)
    }catch(e){
        res.status(500).json(e);
    }
})

router.get('/:id', async (req: Request, res, next) => {
    try {
        let data = await PersonaModel.getByID(+req.params.id);
        res.send(data)
    }
    catch(e){
        let err: any = new Error(e);
            err.statusCode = 500;
        next(err);
    }
  
})

router.post('/add', async (req: Request, res: Response) => {
    let persona: PersonaModel = req.body;
    let modelPersona = new PersonaModel(null, persona.nombre, persona.apellido, persona.direccion, persona.telefono, persona.celular, persona.fechaNacimiento, persona.hasCoronavirus, persona.hasSintomas)
    try {
        let [newPerson,] = await PersonaModel.save(modelPersona);
        console.log(newPerson)
        res.status(201).send(newPerson)
    } catch (e) {
        res.send(e)
    }
})

router.put('/update/:id', async (req: Request, res: Response) => {
    try {
        let [updated,] = await PersonaModel.update(req.body, +req.params.id);
        res.status(200).send({status: true,data: {fields:updated, update: req.body}});
    } catch (e) {
        res.send(e)
    }
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        let [updated,] = await PersonaModel.delete(+req.params.id);
        res.send(updated);
    } catch (e) {
        res.send(e)
    }
})

export default router

