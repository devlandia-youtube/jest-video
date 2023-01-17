import { User, UsersRepository } from "../repositories/UsersRepository";

export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  execute({ age, email, name }: User) {
    const user = this.usersRepository.create({ name, age, email });

    return user;
  }
}
