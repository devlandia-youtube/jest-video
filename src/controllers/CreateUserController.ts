import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  handle(request: Request, response: Response) {
    const { name, email, age, password } = request.body;

    const usersRepository = new UsersRepository();

    const createUserService = new CreateUserService(usersRepository);
    
    const user = createUserService.execute({ name, email, age, password });

    return response.status(201).json(user);
  }
}
