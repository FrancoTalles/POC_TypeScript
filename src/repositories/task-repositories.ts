import { QueryResult } from "pg";
import { db } from "../config/database.js";
import { Task } from "../controllers/tasks-controllers.js";

async function createTask(task: Task) {
    const {name, description} = task

    const createQuery = await db.query(
    `
        INSERT INTO "tasks" ("name", "description") 
        VALUES ($1, $2);
    `, [name, description])

    return createQuery
};

async function readTasks(){
    const readQuery = await db.query(
    `
        SELECT * FROM tasks;
    `)

    return readQuery;
};
export default { createTask, readTasks };