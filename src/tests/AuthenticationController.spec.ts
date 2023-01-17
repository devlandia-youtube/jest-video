import request from 'supertest';
import { app } from '../app';
import { User, UsersRepository } from '../repositories/UsersRepository';

describe('AuthenticationController', () => {
  let user: User;

  beforeAll(() => {
    const usersRepository = new UsersRepository();

    user = usersRepository.create({
      name: 'Lizzie Torres',
      email: 'lizzie@gmail.com',
      age: 24,
      password: 'supersecretpassword'
    })
  });

  it('should be able to authenticate', async () => {
    const response = await request(app).post('/authenticate').send({
      email: user.email,
      password: user.password
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeTruthy();
  });
});
