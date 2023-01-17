import express from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const app = express();
app.use(express.json());

const createUserCOntroller = new CreateUserController();

app.post('/create', createUserCOntroller.handle);

export { app };
