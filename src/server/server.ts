import routes from '@routes/routes';
import express, { Application } from 'express';
import morgan from 'morgan'; //login of call http

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", routes());//Global Path

export default app;