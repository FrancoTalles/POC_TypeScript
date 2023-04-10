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

async function updateTask(id: number) {
    const updated = await taskRepositories.updateStatus(id);
    if(!updated) throw new Error("Não conseguiu atualizar");
    return updated;
}

export default { createTask, readTasks, updateTask}