import request from 'supertest';
import { app } from '../app';
import { UsersRepository } from '../repositories/UsersRepository';

describe('ListUsersController', () => {
  beforeAll(() => {
    const usersRepository = new UsersRepository();

    usersRepository.create({
      name: 'Gary Briggs',
      email: 'nimikepe@azamil.nu',
      age: 30,
      password: 'supersecretpassword'
    })
  });

  it('should be able to list users', async () => {
    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('users');
    expect(response.body.users).toHaveLength(1);
  })
})
