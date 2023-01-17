import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController {
  handle(request: Request, response: Response) {

    const usersRepository = new UsersRepository();
    const listUsersService = new ListUsersService(usersRepository);

    const users = listUsersService.execute();

    response.status(200).json({
      users
    });
  }
}
