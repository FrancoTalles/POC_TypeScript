import taskRepositories from "../repositories/task-repositories.js";
import { Request, Response, NextFunction } from "express";

export async function validateId(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    try {
        const search = await taskRepositories.getTaskById(id);

        if(search.rowCount === 0){
            return res.status(404).send("Task não encontrada")
        }

        res.locals.id = id;
        next();
    } catch (error) {
        return res.status(500).send("Error ao validar o Id")
    }



}
