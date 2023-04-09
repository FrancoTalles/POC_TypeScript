import { validateSchema } from "../middlewares/validateSchema.js";
import { Router } from "express";
import { taskSchema } from "../schemas/task-schemas.js"
import tasksControllers from "../controllers/tasks-controllers.js";

const taskRoutes = Router();

taskRoutes.get("/", tasksControllers.read);
taskRoutes.post("/", validateSchema(taskSchema), tasksControllers.create);
taskRoutes.put("/:id", );
taskRoutes.delete("/:id", );

export default taskRoutes;