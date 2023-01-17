import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { AuthenticateService } from "../services/AuthenticateService";

export class AuthenticateController {
  handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const authenticateService = new AuthenticateService(usersRepository);
    
    const token = authenticateService.execute(email, password);

    return response.json({ token });
  }
}
