import { User, UsersRepository } from "../repositories/UsersRepository";

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  execute(user: User) {
    const userWithId = this.usersRepository.create(user);

    return userWithId;
  }
}
