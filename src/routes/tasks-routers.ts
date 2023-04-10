import { validateSchema } from "../middlewares/validateSchema.js";
import { Router } from "express";
import { taskSchema } from "../schemas/task-schemas.js"
import tasksControllers from "../controllers/tasks-controllers.js";
import { validateId } from "../middlewares/validateId.js";

const taskRoutes = Router();

taskRoutes.post("/", validateSchema(taskSchema), tasksControllers.create);
taskRoutes.get("/", tasksControllers.read);
taskRoutes.patch("/:id", validateId, tasksControllers.update);
taskRoutes.delete("/:id", validateId, tasksControllers.remove);

export default taskRoutes;