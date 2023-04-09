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

export default { createTask, readTasks}