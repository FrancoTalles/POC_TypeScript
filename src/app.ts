import express, { json } from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks-routers.js";

const app = express();
app.use(json());
app.use(cors());
app.use(taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));