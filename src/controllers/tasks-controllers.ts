import taskServices from "../services/task-services.js";
import { Request, Response, NextFunction } from "express";

export type Task = {
    id?: number,
    name: string,
    description: string,
    status?: boolean,
    createdAt?: string | Date
}


async function create(req: Request, res: Response, next: NextFunction) {
    const task = req.body as Task;

    try {
        const create = await taskServices.createTask(task)
        return res.status(201).send("Created")
    } catch (error) {
        return res.status(500).send("Create Error")
    }   
}

async function read(req: Request, res: Response, next: NextFunction) {
    try {
        const tasks = await taskServices.readTasks();

        return res.status(200).send(tasks)
    } catch (error) {
        return res.status(500).send("Read Error")
    }
}

async function update(req: Request, res: Response, next: NextFunction) {
    const id = res.locals.id as string;

    try {
        const updateTask = await taskServices.updateTask(id)
        return res.status(202).send("Updated")
    } catch (error) {
        return res.status(500).send("Update Error")
    }
}

async function remove(req: Request, res: Response, next: NextFunction) {
    const id = res.locals.id as string;
    try {
        const deleteTask = await taskServices.deleteTask(id)
        return res.status(204).send("Deleted")
    } catch (error) {
        return res.status(500).send("Delete Error")
    }
}

 
export default { create, read, update, remove }