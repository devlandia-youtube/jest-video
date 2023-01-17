import express from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUsersController } from './controllers/ListUsersController';
import { AuthenticateController } from './controllers/AuthenticateController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const app = express();
app.use(express.json());

const createUserCOntroller = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateController = new AuthenticateController();

app.post('/create', createUserCOntroller.handle);
app.get('/users', ensureAuthenticated, listUsersController.handle);

app.post('/authenticate', authenticateController.handle);

export { app };
