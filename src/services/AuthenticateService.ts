import { UsersRepository } from "../repositories/UsersRepository";
import jwt from 'jsonwebtoken';

export class AuthenticateService {
  constructor (private usersRepository: UsersRepository) {}

  execute(email: string, password: string) {
    const user = this.usersRepository.findByEmail(email);

    if (user?.password !== password) return null;

    const token = jwt.sign({ email, sub: user.id }, 'key123');

    return token;
  }
}
