import { randomUUID } from 'node:crypto';

export type User = {
  id?: string;
  name: string
  email: string
  age: number
}

export class UsersRepository {
  private static users: User[] = [];

  create(user: User): User {
    Object.assign(user, {
      id: randomUUID()
    });
    UsersRepository.users.push(user);
    return user;
  }
}
