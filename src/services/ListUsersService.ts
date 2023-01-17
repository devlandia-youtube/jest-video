import { UsersRepository } from "../repositories/UsersRepository";

export class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}
  
  execute() {
    const users = this.usersRepository.list();

    return users;
  }
}