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

async function getTaskById(id: string) {
    const getQuery = await db.query(
    `
        SELECT * FROM tasks WHERE id = $1;
    `,
    [id]
    );
    return getQuery;
}

async function updateStatus(id: string){
    const updateQuery = await db.query(
        `UPDATE tasks SET status = true WHERE id = $1`, [id])
    return updateQuery;
}

async function deleteTask(id: string) {
    const deleteQuery = await db.query(
        `DELETE FROM tasks WHERE id = $1`, [id]);
    return deleteQuery;
    
}
export default { createTask, readTasks, getTaskById, updateStatus, deleteTask };