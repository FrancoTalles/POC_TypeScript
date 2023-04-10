import { Task } from "@/controllers/tasks-controllers.js";
import taskRepositories from "../repositories/task-repositories.js";

async function createTask(task: Task) {
    const create = await taskRepositories.createTask(task);
    if(!create) throw new Error("Não conseguiu criar")
    return create;
}

async function readTasks() {
    const read = await taskRepositories.readTasks();
    const tasks: Task[] = read.rows;
    return tasks;
}

async function updateTask(id: string) {
    const updated = await taskRepositories.updateStatus(id);
    if(!updated) throw new Error("Não conseguiu atualizar");
    return updated;
}

async function deleteTask(id: string) {
    const deleted = await taskRepositories.deleteTask(id);
    if(deleted.rowCount === 0) throw new Error("Não conseguiu deletar")
    return deleted;
}

export default { createTask, readTasks, updateTask, deleteTask}